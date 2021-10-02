import styled, { StyledProps } from 'styled-components';
import Inquire from '../Inquire';

type Props = StyledProps<{
  color?: string;
}>;

const StyledInquire = styled(Inquire)`
  color: ${({ theme, color }: Props) => (color ? color : theme.colors.whiteColor)};
`;

export default StyledInquire;
