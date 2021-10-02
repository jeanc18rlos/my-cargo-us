import styled from 'styled-components';
import { rem } from 'polished';

export const StyledTopBar = styled.nav`
  background-color: #e63946;
  padding: ${rem('12px')} 0;
  font-size: ${rem('14px')};

  a,
  p,
  i,
  span,
  li {
    color: white;
  }
  .gx-text-truncate {
    color: white;
  }
  ul {
    list-style: none;
    margin-left: auto;
    margin-bottom: 0;
    padding-left: 0;

    li {
      padding: 0 ${rem('10px')};
      text-transform: uppercase;
      font-size: ${rem('12px')};
      line-height: ${rem('12px')};
      display: inline-block;
      cursor: pointer;
    }
  }

  .gx-header-horizontal-top-left {
    margin-right: 0;
    width: 100%;
    max-width: 50%;
  }
`;
