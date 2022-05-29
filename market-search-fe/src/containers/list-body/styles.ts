import styled from 'styled-components';

export const ListBodyStyle = styled.div`
  margin: 16px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
