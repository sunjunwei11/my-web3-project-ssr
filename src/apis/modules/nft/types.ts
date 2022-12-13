export interface AttributesItem {
  trait_type: string;
  value: string;
}

export interface NftJson {
  attributes: AttributesItem[];
  description: string;
  image: string;
  name: string;
}
