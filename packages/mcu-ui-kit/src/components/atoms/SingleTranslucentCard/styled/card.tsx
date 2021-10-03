import styled from 'styled-components';
import { rem } from 'polished';

export const StyledCard = styled.div`
  background-color: '#cccccc29';
  backdrop-filter: blur(10px);
  border-radius: 13px;
  color: #ffffff;
  padding: ${rem(20)};
  width: ${rem(209)};
  height: ${rem(232)};
  min-height: ${rem(144)};
  box-shadow: inset 0px 2px 2px #ffffff5e;
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 1;
`;
