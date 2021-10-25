import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding: 0;
  }
`;

export const StyledModalContainer = styled.div`
  .gx-social-link li .anticon {
    color: #2196f3;
    border: solid 1px #2196f3;
    &:hover {
      color: #f44336;
      border: solid 1px #f44336;
    }
  }
  .np {
    padding: 0;
  }
  .nm {
    margin: 0;
  }
  .hide-sm {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .col-wrapper {
    margin: auto;
  }
  .form-container {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  aside {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    img {
      position: absolute;
      height: 100%;
      object-fit: cover;
      border-radius: 6px 0 0px 6px;
      width: 100%;
    }
    h3 {
      position: relative;
      color: white;
      text-align: center;
    }
  }
`;
