import  {Component} from "react";
import { StyledCard } from "./styled";

type Props = {
  children: React.ReactNode;
}

class Card extends Component<Props, {}> {
  public render() {
    return (
      <StyledCard>
        {this.props.children}
      </StyledCard>
    );
  }
}

export default Card;
