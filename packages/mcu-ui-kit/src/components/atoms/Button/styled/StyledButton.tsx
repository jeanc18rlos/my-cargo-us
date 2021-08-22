import styled, { StyledProps } from 'styled-components';
import Button from '../Button';
import { rem } from 'polished';

type Props = StyledProps<{
  backgroundColor?: string;
  color?: string;
  isAlert?: boolean;
}>;

const StyledButton = styled(Button)`
  color: ${({ theme, color }: Props) => (color ? color : theme.colors.whiteColor)};
  background-color: #1ea7fd;
  &.storybook-button {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  &.storybook-button--secondary {
    color: #333333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) ${rem('0px')} ${rem('0px')} ${rem('0px')} ${rem('1px')} inset;
  }
  &.storybook-button--small {
    font-size: ${rem('12px')};
    padding: ${rem('10px')} ${rem('16px')};
  }
  &.storybook-button--medium {
    font-size: ${rem('14px')};
    padding: ${rem('11px')} ${rem('20px')};
  }
  &.storybook-button--large {
    font-size: ${rem('16px')};
    padding: ${rem('12px')} ${rem('24px')};
  }
`;

export default StyledButton;
