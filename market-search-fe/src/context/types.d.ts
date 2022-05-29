import { MarketProduct, Product } from '../api/types';

export type Action = { type: 'addSearchedProduct'; data: MarketProduct[]; mainProductName: string };

export type SearchedTerm = {
  mainProductName: string;
  product: Product | null;
  similarProducts: Product[];
};

export type Market = {
  id: string;
  name: string;
  lineOne: string;
  lineTwo: string | null;
  city: string;
  zipCode: string;
  searchedTerms: SearchedTerm[];
};

export type State = {
  markets: Market[];
};
