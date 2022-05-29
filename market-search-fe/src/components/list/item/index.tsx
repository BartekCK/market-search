import React from 'react';
import { Market } from '../../../context/types';
import { SimilarItemWrapperStyle, HeaderStyle } from '../styles';
import Record from './Record';
import { MarketProductContext } from '../../../context';

type Props = {
  market: Market;
};

const Item: React.FC<Props> = ({ market }: Props) => {
  const { searchedTerms } = market;

  const { dispatch } = React.useContext(MarketProductContext);

  return (
    <>
      {searchedTerms.map((term) =>
        term.product ? (
          <Record
            key={term.mainProductName}
            name={term.product.name}
            price={term.product.price}
            onRemove={() => {
              dispatch({ type: 'deleteProduct', mainProductName: term.mainProductName });
            }}
          />
        ) : (
          <SimilarItemWrapperStyle key={term.mainProductName}>
            <HeaderStyle>
              {!term.similarProducts.length ? (
                <h3 className="title danger">Nie znaleziono produktu: "{term.mainProductName}"</h3>
              ) : (
                <h3 className="title success">Znaleziono podobne produkty:</h3>
              )}
            </HeaderStyle>
            <div className="records-wrapper">
              {term.similarProducts.map((similarProduct) => (
                <Record
                  key={similarProduct.name}
                  name={similarProduct.name}
                  price={similarProduct.price}
                  onAdd={() => {
                    dispatch({
                      type: 'chooseProduct',
                      product: similarProduct,
                      mainProductName: term.mainProductName,
                      marketId: market.id,
                    });
                  }}
                />
              ))}
            </div>
          </SimilarItemWrapperStyle>
        ),
      )}
    </>
  );
};

export default Item;
