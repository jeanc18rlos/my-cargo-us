import styled from 'styled-components';
import { rem } from 'polished';

export const StyledHeader: any = styled('div')`
  position: sticky;
  background-color: #ffffff;
  height: 0;
  z-index: 10;
  top: 0;

  &:before {
    pointer-events: none;
    display: none;
  }
  header {
    background-color: transparent;
    backdrop-filter: blur(${rem('20px')});
    padding: ${rem('18px')} 0 ${rem('18px')};
    transition: 0.25s background ease-in-out;
    .gx-brand {
      width: ${rem('106px')};
      height: ${rem('64px')};
    }
    @media screen and (max-width: ${rem('1023px')}) {
      padding: ${rem('14px')};
    }
  }
  .gx-header-horizontal-main-flex {
    .flex-cont {
      display: flex;
    }
    &.reverse-mobile {
      @media screen and (max-width: ${rem('1023px')}) {
        .gx-ml-auto {
          margin-left: 0 !important;
        }
        flex-direction: row-reverse;
        .brand {
          margin-right: auto;
        }
      }
    }
  }
  &.solid {
    header {
      background-color: #1d3557;
    }
    .gx-header-horizontal-nav .ant-menu-submenu-horizontal > .ant-menu-submenu-title {
      color: #545454;
    }
  }
`;

export const StyledNav = styled.div`
  padding: ${rem('8px')} ${rem('0px')} ${rem('4px')};
  backdrop-filter: blur(${rem('20px')});
  border: solid 0.1em rgba(255, 255, 255, 0.2);
  border-left: 0;
  border-right: 0;
  background-color: transparent;
  transition: 0.25s background ease-in-out;
  &.solid {
    background-color: white;
  }
`;
