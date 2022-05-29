import React from 'react';
import { Input, AutoComplete } from 'antd';
import Api from '../../api';
import { ProductSearch } from '../../types';
import { ItemStyle } from './styles';

type Props = {
  width?: number;
  className?: string;
};

const SearchBar: React.FC<Props> = ({ width, className }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [products, setProducts] = React.useState<ProductSearch[]>([]);

  const renderItem = React.useCallback(
    ({ name, lowestPrice }: ProductSearch) => ({
      value: name,
      label: (
        <ItemStyle>
          <span>{name}</span>
          <span>{lowestPrice} zł</span>
        </ItemStyle>
      ),
    }),
    [],
  );

  const renderOptions = React.useMemo(() => {
    return products.map((product) => renderItem(product));
  }, [products]);

  const onInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = await Api.searchProduct(event.target.value);
    setProducts([...data]);
  };

  return (
    <AutoComplete dropdownClassName="certain-category-search-dropdown" className={className} options={renderOptions}>
      <Input.Search size="large" placeholder="input here" enterButton onInput={onInput} />
    </AutoComplete>
  );
};

export default SearchBar;
