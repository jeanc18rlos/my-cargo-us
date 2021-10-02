import styled from 'styled-components';

export const StyledTranslucentCard = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 975px) {
    justify-content: start;
    /*overflow-x: scroll;*/
    height: 200px;
  }
`;
