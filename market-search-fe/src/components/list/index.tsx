import React from 'react';
import { Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Market } from '../../context/types';
import Title from './Title';
import Item from './item';

type Props = {
  market: Market;
};

const List: React.FC<Props> = ({ market }: Props) => {
  const price: number = React.useMemo(() => {
    return market.searchedTerms.reduce((acc, term) => {
      return acc + (term.product ? term.product.price : 0);
    }, 0);
  }, [market]);

  const isDisabled: boolean = React.useMemo(() => {
    return !!market.searchedTerms.find((term) => !term.product);
  }, [market]);

  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <Meta title={<Title market={market} />} description={<Item market={market} />} />
      <Button disabled={isDisabled} style={{ margin: '1rem 0', float: 'right' }} type="primary">
        Zamów (<span style={{ fontStyle: 'italic' }}>{price.toFixed(2)} zł</span>)
      </Button>
    </Card>
  );
};

export default List;
