import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { MarketProduct } from '../../api/types';
import { Market } from '../../context/types';

type Props = {
  market: Market;
};

const List: React.FC<Props> = ({ market }: Props) => {
  const [items, setItems] = React.useState<MarketProduct[]>([]);

  const renderTitle = () => {
    return (
      <div>
        <h3>{market.name}</h3>
        <p>{market.lineOne}</p>
        <p>{market.lineTwo}</p>
        <p>
          {market.city}, {market.zipCode}
        </p>
      </div>
    );
  };

  const renderBody = () => {
    const { searchedTerms } = market;

    return searchedTerms.map((term) => <span key={term.mainProductName}>{term.mainProductName}</span>);
  };

  return (
    <Card style={{ width: 300, marginTop: 16 }}>
      <Meta title={renderTitle()} description={renderBody()} />
    </Card>
  );
};

export default List;
