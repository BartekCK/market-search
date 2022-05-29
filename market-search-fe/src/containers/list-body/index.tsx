import React from 'react';
import searchProductMock from '../../mocks/searchProduct.json';
import { MarketProduct } from '../../types';

const ListBody: React.FC = () => {
  const [state, setState] = React.useState<MarketProduct[]>(searchProductMock);

  return <div>ListBody</div>;
};
