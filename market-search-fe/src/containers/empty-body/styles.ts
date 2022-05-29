import styled from 'styled-components';

export const EmptyBodyStyle = styled.div`
  text-weight: 800;
  font-size: 3.5rem;

  > .empty-body-container {
    text-align: center;

    > .header {
      text-transform: uppercase;
      font-size: 5rem;

      @media (max-width: 768px) {
        font-size: 3rem;
      }
    }

    > .description {
      font-style: italic;
      font-size: 2rem;
      margin: 2.5rem 0;
    }
  }

  .ant-comment {
    display: flex;
    justify-content: center;
  }

  li > button {
    background: black;
  }
`;
