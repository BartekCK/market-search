import axios from 'axios';
import { MarketProduct, ProductSearch } from './types';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const searchProduct = async (productName: string): Promise<ProductSearch[]> => {
  const result = await instance.get<ProductSearch[]>(`/products?search=${productName}`);

  return result.data;
};

export const searchMarketProduct = async (productName: string): Promise<MarketProduct[]> => {
  const result = await instance.get<MarketProduct[]>(`/markets/products?productName=${productName}`);

  return result.data;
};
