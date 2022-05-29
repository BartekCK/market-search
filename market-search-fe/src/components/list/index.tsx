import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Market } from '../../context/types';
import Title from './Title';
import Item from './item';

type Props = {
  market: Market;
};

const List: React.FC<Props> = ({ market }: Props) => {
  return (
    <Card style={{ marginBottom: '1.5rem' }}>
      <Meta title={<Title market={market} />} description={<Item market={market} />} />
    </Card>
  );
};

export default List;
