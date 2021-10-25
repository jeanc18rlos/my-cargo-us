import { memo,HTMLProps, ReactNode, FC } from "react";
import { StyledTest } from "./styled";

type TestProps = { color: string } 
 
const Test: FC<TestProps & HTMLProps<ReactNode>> = ({ children }) => (
<StyledTest>
  {children}
</StyledTest>
); 

export default memo(Test);