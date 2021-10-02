import styled from 'styled-components';
import { Layout } from 'antd';
import { rem } from 'polished';


export const StyledFooter: any = styled(Layout.Footer)`
  background-color: #1d3557;
  .gx-container {
    box-sizing: border-box;
    max-width: 100%;
  }
  h3 {
    color: #457b9d;
  }
  p {
    color: white;
  }
  .phone-number {
    color: white;
    margin-bottom: 1rem;
    display: block;
    font-size: ${rem('18px')};
  }
  ul {
    list-style: none;
    padding-left: ${rem('4px')};
  }
  li {
    margin-bottom: 0.5rem;
  }
  h3,
  p,
  ul {
    margin-bottom: 1rem;
  }
  .footer-bottom {
    padding-top: ${rem('16px')};
    @media screen and (max-width: ${rem('767px')}) {
      .ant-col {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        max-width: ${rem('480px')};
        margin: auto;
        margin-bottom: 2rem;
        margin-top: 0;
      }
    }
  }
  .footer-top {
    border-bottom: solid ${rem('1px')} rgba(255, 255, 255, 0.2);
    padding-bottom: ${rem('16px')};
    .gx-brand {
      max-height: ${rem('100px')};
    }
    @media screen and (max-width: ${rem('767px')}) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .subscription-container {
    display: flex;
    color: white;
    align-items: center;
    justify-content: flex-end;

    form {
      min-width: ${rem('284px')};
    }
    p {
      font-size: ${rem('16px')};
      padding-right: ${rem('8px')};
    }
    @media screen and (max-width: ${rem('992px')}) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    @media screen and (max-width: ${rem('767px')}) {
      align-items: center;
      max-width: ${rem('250px')};
      margin-top: ${rem('16px')};
      form {
        min-width: ${rem('200px')};
        .ant-form-item,
        button {
          width: 100%;
        }
      }
    }
  }
`;

export const StyledBottomBar: any = styled.div`
  box-sizing: border-box;
  max-width: 100%;
  background-color: #e63946;
  color: white;
  .gx-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${rem('8px')};
    text-align: center;
  }
`;
