import { Action, Market, SearchedTerm, State } from './types';
import { MarketProduct } from '../api/types';

const mapIntoSearchedTerm = (marketProduct: MarketProduct, mainProductName: string): SearchedTerm => {
  return {
    mainProductName,
    product: marketProduct.product,
    similarProducts: marketProduct.similarProducts,
  };
};

const mapMarketProductIntoMarket = (marketProduct: MarketProduct, searchedTerms: SearchedTerm[]): Market => {
  return {
    id: marketProduct.id,
    name: marketProduct.name,
    lineOne: marketProduct.lineOne,
    lineTwo: marketProduct.lineTwo,
    city: marketProduct.city,
    zipCode: marketProduct.zipCode,
    searchedTerms,
  };
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'addSearchedProduct': {
      const { data } = action;

      const markets: Market[] = data
        .map((marketProduct) => {
          const isMarketExist = state.markets.find((market) => market.id === marketProduct.id);

          if (!isMarketExist) {
            const searchedTerm = mapIntoSearchedTerm(marketProduct, action.mainProductName);
            return mapMarketProductIntoMarket(marketProduct, [searchedTerm]);
          }

          //Check if the product is already in the market
          const isProductExist = isMarketExist.searchedTerms.find(
            (searchedTerm) => searchedTerm.mainProductName === action.mainProductName,
          );

          if (isProductExist) {
            return isMarketExist;
          }

          const searchedTerm = mapIntoSearchedTerm(marketProduct, action.mainProductName);
          const searchedTerms = [...isMarketExist.searchedTerms, searchedTerm];
          return mapMarketProductIntoMarket(marketProduct, searchedTerms);
        })
        .sort((a, b) => a.name.localeCompare(b.name));
      return { ...state, markets };
    }

    case 'chooseProduct': {
      const { product, marketId, mainProductName } = action;

      const market = state.markets.find((market) => market.id === marketId);

      if (!market) {
        return state;
      }

      const updatedSearchedTerms = market.searchedTerms.map((searchedTerm) => {
        if (searchedTerm.mainProductName !== mainProductName) {
          return { ...searchedTerm };
        }

        return {
          mainProductName,
          product,
          similarProducts: [],
        };
      });

      const updatedMarket: Market = { ...market, searchedTerms: updatedSearchedTerms };

      return { markets: state.markets.map((market) => (market.id === marketId ? updatedMarket : market)) };
    }

    case 'deleteProduct': {
      const { mainProductName } = action;

      const markets: Market[] = state.markets.map((market) => {
        const searchedTerms = market.searchedTerms.filter(
          (searchedTerm) => searchedTerm.mainProductName !== mainProductName,
        );

        return { ...market, searchedTerms };
      });

      return { ...state, markets };
    }
  }

  return state;
};
