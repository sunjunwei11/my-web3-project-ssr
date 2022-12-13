import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import type { ViteDevServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);

// 👇️ "/home/john/Desktop/javascript"
const __dirname = path.dirname(__filename);

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

(async () => {
  const root = process.cwd();
  const isProd = process.env.NODE_ENV === 'production';
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd
    ? fs.readFileSync(resolve('../dist/client/index.html'), 'utf-8')
    : '';

  // const manifest = isProd
  //   ? JSON.parse(
  //       fs.readFileSync(resolve('dist/client/ssr-manifest.json'), 'utf-8')
  //     )
  //   : {};
  const app = express(); // 获取 index.html

  let vite: ViteDevServer;

  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      base: '/',
      root,
      server: {
        middlewareMode: true,
      },
      appType: 'custom',
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use('/ssr/assets', express.static(resolve('../dist/client/assets')));
    app.use(
      '/ssr/publicAssets',
      express.static(resolve('../dist/client/publicAssets'))
    );
  }

  app.use('/', async (req, res) => {
    const url = req.originalUrl;

    try {
      let template, render;
      if (!isProd) {
        // 1. 读取 index.html
        template = fs.readFileSync(
          path.resolve(__dirname, '../index.html'),
          'utf-8'
        );

        // 2. 应用 Vite HTML 转换。这将会注入 Vite HMR 客户端，
        //    同时也会从 Vite 插件应用 HTML 转换。
        //    例如：@vitejs/plugin-react 中的 global preambles
        template = await vite.transformIndexHtml(url, template);

        // 3. 加载服务器入口。vite.ssrLoadModule 将自动转换
        //    你的 ESM 源码使之可以在 Node.js 中运行！无需打包
        //    并提供类似 HMR 的根据情况随时失效。
        render = (await vite.ssrLoadModule('/src/entry-server.ts')).render;
      } else {
        template = indexProd;
        // @ts-ignore
        render = (await import('../dist/server/entry-server.js')).render;
      }

      // 4. 渲染应用的 HTML。这假设 entry-server.js 导出的 `render`
      //    函数调用了适当的 SSR 框架 API。
      //    例如 ReactDOMServer.renderToString()
      const { renderedHtml, state } = await render(url);

      // 5. 注入渲染后的应用程序 HTML 到模板中。
      const html = template
        .replace(`<!--ssr-outlet-->`, renderedHtml)
        .replace('<!--pinia-state-->', state);

      // 6. 返回渲染后的 HTML。
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // 如果捕获到了一个错误，让 Vite 来修复该堆栈，这样它就可以映射回
      // 你的实际源码中。
      vite && vite.ssrFixStacktrace(e as Error);
      console.log((e as Error).stack);
      res.status(500).end((e as Error).stack);
    }
  });

  app.listen(9000, () => {
    console.log('server is listening in 9000');
  });
})();
