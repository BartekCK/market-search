import React from 'react';
import Header from './containers/header';
import ListBody from './containers/list-body';
import MarketProductsContextProvider from './context';
import EmptyBody from './containers/empty-body';
import Footer from './containers/footer';

function App() {
  return (
    <>
      <MarketProductsContextProvider>
        <Header />
        <ListBody />
        <EmptyBody />
      </MarketProductsContextProvider>
      <Footer />
    </>
  );
}

export default App;
