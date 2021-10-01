import styled, { StyledProps } from 'styled-components';
import { rem } from 'polished';

type Props = StyledProps<{
  active?: boolean;
}>;

export const StyledCard = styled.div<Props>`
  background-color: ${props => (props.active ? '#e63946' : '#cccccc29')};
  backdrop-filter: blur(10px);
  border-radius: 13px;
  color: #ffffff;
  padding: ${rem(20)};
  width: ${rem(315)};
  height: 100%;
  min-height: ${rem(144)};
  box-shadow: ${props => (props.active ? 'none' : 'inset 0px 2px 2px #ffffff5e')};
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 1;
`;
