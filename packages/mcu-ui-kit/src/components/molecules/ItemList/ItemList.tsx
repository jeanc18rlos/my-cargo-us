import { StyledUl } from './styled/StyledUl';
import { StyledTitle } from './styled/StyledTitle';
import { StyledInnerContainer } from "./styled/StyledP"

type Props = {
  title: string;
};

/* TODO: No hacer la implementacion basada en componentes, debe ser parseado la data. 
    el estilo del elemento va por css 
 */
export const ItemList = (props: Props) => {
  return (
    <div>
      <StyledTitle> Reliable Logistic & Transport Solutions Saves Your Time! </StyledTitle>
      <StyledUl>
        {Array.from({ length: 10 }).map((value, index) => (
          <li key={index} style={{marginBottom: 5}}>
            <div style={{display:"flex"}}>
              <div style={{    marginRight: 11}}>
                <div style={{ display: 'inline-block', width: 50, height: 50, backgroundColor: 'red', color: "red" }}>[ img ]</div>
              </div>
              <StyledInnerContainer>
                <h3 style={{ display: 'inline-block', color: '#1d3557', marginBottom: 5 }}>Item title</h3>
                <p>  
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, praesentium consequuntur fuga quas
                  tempore sed facere ab blanditiis mollitia ullam, eligendi minus qui. Iusto sequi corporis esse, id
                  aliquid quas.
                </p>
              </StyledInnerContainer>
            </div>
          </li>
        ))}
      </StyledUl>
    </div>
  );
};
