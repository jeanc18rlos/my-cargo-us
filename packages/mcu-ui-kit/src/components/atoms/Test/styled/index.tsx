import styled, { StyledProps, StyledComponent } from 'styled-components';
import { IThemeInterface } from '../../../../theme';
import { HTMLAttributes } from 'react';

type Props = StyledProps<{
  color?: string;
}>;


export const StyledTest: StyledComponent<
  "div",
  IThemeInterface,
  Props & HTMLAttributes<HTMLElement>,
  never
> = styled.div`
  color: ${({theme, color}: Props) => color ? color : theme.colors.whiteColor};
`;

