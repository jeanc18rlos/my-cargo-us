import styled, { StyledProps } from 'styled-components';
import Card from '../Card';

type Props = StyledProps<{
  color?: string;
}>;


const StyledCard = styled(Card)`
  color: ${({theme, color}: Props) => color ? color : theme.colors.whiteColor};
`;

export default StyledCard;
