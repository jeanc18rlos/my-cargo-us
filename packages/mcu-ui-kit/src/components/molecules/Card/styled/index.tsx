import styled, { StyledProps, StyledComponent } from 'styled-components';
import { IThemeInterface } from '../../../..';
import { HTMLAttributes } from 'react';

type Props = StyledProps<{
  color?: string;
}>;


export const StyledCard: StyledComponent<
  "div",
  IThemeInterface,
  Props & HTMLAttributes<HTMLElement>,
  never
> = styled.div`
  color: ${({theme, color}: Props) => color ? color : theme.colors.whiteColor};
`;

