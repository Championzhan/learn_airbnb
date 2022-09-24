import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;

  .content {
    display: flex;
    align-items: center;

    font-size: 17px;
    font-weight: 700;
    color: ${(props) => props.color};

    .text {
      margin-right: 6px;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`;
