import styled from 'styled-components';

export const TitleStyle = styled.div`
  min-height: 9rem;

  > .title {
  }

  > .ant-typography-secondary {
    margin-bottom: 3px;
    font-size: 1.4rem;
  }
`;

export const SimilarItemWrapperStyle = styled.div`
  padding: 0.5rem 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > .records-wrapper {
    margin-left: 1.5rem;
    font-style: italic;
  }
`;

export const HeaderStyle = styled.div`
  > .title {
    font-weight: 800;
  }

  > .danger {
    color: #ff4d4f;
  }

  & .success {
    color: #1890ff;
    opacity: 0.6;
  }
`;
