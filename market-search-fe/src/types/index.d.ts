export type ProductSearch = {
  name: string;
  lowestPrice: number;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  marketId: string;
};

export type MarketProduct = {
  id: string;
  name: string;
  lineOne: string;
  lineTwo: string | null;
  city: string;
  zipCode: string;
  product: Product | null;
  similarProducts: Product[];
};
