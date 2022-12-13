import { baseInstance } from '@/apis';
import { NftJson } from './types';

// 通过URL从IPFS请求NFT的Json数据
const getNftJson = (src: string) => {
  return baseInstance.get<NftJson>(src);
};

export { getNftJson };
