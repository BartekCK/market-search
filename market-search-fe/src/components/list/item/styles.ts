import styled from 'styled-components';

export const RecordStyle = styled.div`
  padding: 1rem 0;
  color: black;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:first-child {
    border-top: none;
  }

  > .name {
    font-size: 1.6rem;
  }

  > .product-inf-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 3rem;
  }
`;
