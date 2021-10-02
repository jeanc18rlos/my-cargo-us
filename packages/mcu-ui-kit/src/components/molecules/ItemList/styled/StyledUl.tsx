import styled, { StyledProps } from 'styled-components';

export const StyledUl = styled.ul`
  columns: 2;
  list-style-type: none;
  @media only screen and (max-width: 600px) {
    columns: 1;
  }
`;
