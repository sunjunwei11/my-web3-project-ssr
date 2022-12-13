import createInstance from './create';

// 基础的Axios实例，请求配置以及拦截器都是使用的通用的配置
const baseInstance = createInstance({}, [], []);

// 其它Axios实例，可以传不同的配置覆盖通用的配置，并且可以添加该实例特殊的拦截器
const v1Instance = createInstance(
  {
    baseURL: '/v1',
  },
  [],
  []
);

export { baseInstance, v1Instance };
