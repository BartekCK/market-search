import React from 'react';
import { RecordStyle } from './styles';
import { Button, Tag } from 'antd';

type Props = {
  name: string;
  price: number;
  onAdd?: () => void;
  onRemove?: () => void;
};

const Record: React.FC<Props> = ({ name, price, onAdd, onRemove }: Props) => {
  return (
    <RecordStyle>
      <span className="name">{name}</span>
      <div className="product-inf-container">
        <Tag className="price" color="geekblue">
          {price.toFixed(2)} zł
        </Tag>
        {onAdd && (
          <Button size="small" type="primary" onClick={onAdd}>
            +
          </Button>
        )}
        {onRemove && (
          <Button size="small" type="primary" danger onClick={onRemove}>
            X
          </Button>
        )}
      </div>
    </RecordStyle>
  );
};

export default Record;
