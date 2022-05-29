import React from 'react';
import Header from './containers/header';
import ListBody from './containers/list-body';
import MarketProductsContextProvider from './context';

function App() {
  return (
    <div className="App">
      <MarketProductsContextProvider>
        <Header />
        <ListBody />
      </MarketProductsContextProvider>
    </div>
  );
}

export default App;
