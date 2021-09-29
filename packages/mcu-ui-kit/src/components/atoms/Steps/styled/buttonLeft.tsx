import styled from 'styled-components';
import { rem } from 'polished';
import LeftArrow from '../../../../assets/img/arrow-left-light.png';

export const StyledButton = styled.button`
  width: ${rem(30)};
  height: ${rem(200)};
  background-image: url(${LeftArrow});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  top: 50%;
  transition: opacity 0.3s ease-in-out;
  background-color: transparent;
  border: none;
  &:hover {
    opacity: 1;
  }
`;
