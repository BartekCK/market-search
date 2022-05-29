import React from 'react';
import { Market } from '../../context/types';
import { TitleStyle } from './styles';

type Props = {
  market: Market;
};

const Title: React.FC<Props> = ({ market }: Props) => {
  return (
    <TitleStyle>
      <h2 className="title">{market.name}</h2>
      <p className="ant-typography ant-typography-secondary">{market.lineOne}</p>
      <p className="ant-typography ant-typography-secondary">{market.lineTwo}</p>
      <p className="ant-typography ant-typography-secondary">
        {market.city}, {market.zipCode}
      </p>
    </TitleStyle>
  );
};

export default Title;
