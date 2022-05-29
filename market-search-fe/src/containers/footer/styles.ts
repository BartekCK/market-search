import styled from 'styled-components';

export const FooterStyle = styled.div`
  color: #fff;
  background: black;
  opacity: 0.8;

  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  padding: 0 1rem;

  > .col {
    display: flex;
    flex-direction: column;
    margin: 0 10rem;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    font-size: 0.9rem;
  }
`;
