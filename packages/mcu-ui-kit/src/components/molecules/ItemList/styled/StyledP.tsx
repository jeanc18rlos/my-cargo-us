import styled, { StyledProps } from 'styled-components';

export const StyledP = styled.p`
    opacity: 1;
    height: auto;
    @media only screen and (max-width: 600px) {
        height: 0px;
        opacity: 0;
    }
    [name="t"]:checked{
        height: auto;
        opacity: 1;
    }
  
`;


export const StyledInnerContainer = styled.div`
    
    p {
        opacity: 1;
        height: auto;
        @media only screen and (max-width: 600px) {
            height: 0px;
            opacity: 0;
        }

    }
    input[name="t"]:checked{
        
        p{
            height: auto;
            opacity: 1;

        }
    }
  
`;
