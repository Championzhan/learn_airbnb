import styled from 'styled-components';

export const RightWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => (props.theme.isAlpha ? '#fff' : props.theme.text.primaryColor)};
  font-weight: 600;

  .btns {
    display: flex;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: content-box;

      &:hover {
        background-color: ${(props) => (props.theme.isAlpha ? 'rgba(255,255,255,0.1)' : '#f5f5f5')};
      }
    }
  }

  .profile {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};

    cursor: pointer;

    // 利用 less 的样式混入
    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;

      z-index: 99;
      top: 50px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;