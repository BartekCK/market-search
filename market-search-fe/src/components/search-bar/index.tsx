import React from 'react';
import { Input, AutoComplete, notification } from 'antd';
import Api from '../../api';
import { ItemStyle } from './styles';
import { MarketProductContext } from '../../context';
import { MarketProduct, ProductSearch } from '../../api/types';

type Props = {
  width?: number;
  className?: string;
};

const SearchBar: React.FC<Props> = ({ width, className }: Props) => {
  const [products, setProducts] = React.useState<ProductSearch[]>([]);

  const { dispatch } = React.useContext(MarketProductContext);

  const renderItem = React.useCallback(
    ({ name, lowestPrice }: ProductSearch) => ({
      value: name,
      label: (
        <ItemStyle>
          <span>{name}</span>
          <span className="price">od {lowestPrice} zł</span>
        </ItemStyle>
      ),
    }),
    [],
  );

  const renderOptions = React.useMemo(() => {
    return products.map((product) => renderItem(product));
  }, [products, renderItem]);

  const onInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = await Api.searchProduct(event.target.value);
    setProducts([...data]);
  };

  const onSelect = async (productName: string) => {
    const marketsProduct: MarketProduct[] = await Api.searchMarketProduct(productName);

    dispatch({ type: 'addSearchedProduct', data: marketsProduct, mainProductName: productName });
  };

  const openNotification = () => {
    notification.warn({
      message: 'Uwaga',
      description: 'Wprowadzono nieprawidłową nazwę produktu',
    });
  };

  const onChange = (event: any) => {
    const { value } = event.target;

    if (!products.length && value) {
      openNotification();
    }
  };

  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      className={className}
      options={renderOptions}
      onSelect={onSelect}
    >
      <Input.Search
        width={width}
        size="large"
        placeholder="Wprowadź nazwę produktu"
        enterButton
        onInput={onInput}
        onPressEnter={onChange}
      />
    </AutoComplete>
  );
};

export default SearchBar;
