import styled from 'styled-components';

export const ListBodyStyle = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  overflow: auto;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
