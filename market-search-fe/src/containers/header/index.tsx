import React from 'react';
import { HeaderStyle, SearchContainerStyle } from './styles';
import SearchBar from '../../components/search-bar';

const Header: React.FC = () => {
  return (
    <HeaderStyle>
      <header className="header-title">Czego dziś potrzebujesz?</header>
      <SearchContainerStyle>
        <SearchBar width={500} className="search-bar-component" />
      </SearchContainerStyle>
    </HeaderStyle>
  );
};

export default Header;
