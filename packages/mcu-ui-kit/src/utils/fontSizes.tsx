import { css } from 'styled-components';
import { rem } from 'polished';

export const base = ({
  color,
  fontFamily,
  weight,
}: {
  color: string;
  fontFamily: string;
  weight?: number;
}) => css`
  color: ${color};
  font-family: ${fontFamily};
  font-size: ${rem('16px')};
  font-style: normal;
  font-weight: ${weight || 400};
  line-height: 24px;
`;

