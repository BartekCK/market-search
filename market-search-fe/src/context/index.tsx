import React from 'react';
import { reducer } from './reducer';
import { Action, State } from './types';

const initialState: State = {
  markets: [],
};

export const MarketProductContext = React.createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

type Props = {
  children: React.ReactNode;
};

const MarketProductsContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <MarketProductContext.Provider value={{ state, dispatch }}>{children}</MarketProductContext.Provider>;
};

export default MarketProductsContextProvider;
