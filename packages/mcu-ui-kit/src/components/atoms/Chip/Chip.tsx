import { memo,HTMLProps, ReactNode, FC } from "react";
import { StyledChip } from "./styled";

type ChipProps = { color: string } 
 
const Chip: FC<ChipProps & HTMLProps<ReactNode>> = ({ children }) => (
<StyledChip>
  {children}
</StyledChip>
); 

export default memo(Chip);