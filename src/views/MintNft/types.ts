export interface AttributeItem {
  trait_type: string;
  value: string;
}

export interface NftItem {
  attributes: AttributeItem[];
  description: string;
  image: string;
  name: string;
  cloth?: string;
  hairColor?: string;
  hairLength?: string;
  tokenId?: number;
}
