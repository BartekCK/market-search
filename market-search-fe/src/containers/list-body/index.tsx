import React from 'react';
import List from '../../components/list';
import { ListBodyStyle } from './styles';
import { MarketProductContext } from '../../context';

const ListBody: React.FC = () => {
  const { state } = React.useContext(MarketProductContext);

  return (
    <ListBodyStyle>
      {state.markets.every((el) => el.searchedTerms.length) &&
        state.markets.map((market) => <List key={market.id} market={market} />)}
    </ListBodyStyle>
  );
};

export default ListBody;
