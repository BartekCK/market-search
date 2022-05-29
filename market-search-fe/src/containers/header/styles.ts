import styled from 'styled-components';
import img from './header.jpg';

export const HeaderStyle = styled.div`
  background: url(${img}) no-repeat center center;
  background-size: cover;
  height: 40vh;
  width: 100%;
  text-align: center;

  > .header-title {
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 3.5rem;

    @media (max-width: 768px) {
      font-size: 3rem;
      padding: 2rem;
    }
  }
`;

export const SearchContainerStyle = styled.div`
  margin: 10px;
  > .search-bar-component {
    width: 65%;
  }
`;
