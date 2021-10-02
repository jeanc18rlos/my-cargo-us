import { StyledUl } from './styled/StyledUl';
import { StyledTitle } from './styled/StyledTitle';
import { Col, Row } from 'antd';

type Props = {
  title: string;
};

export const ItemList = (props: Props) => {
  return (
    <div>
      <StyledTitle> Reliable Logistic & Transport Solutions Saves Your Time! </StyledTitle>
      <StyledUl>
        {Array.from({ length: 10 }).map((value, index) => (
          <li key={index}>
            <Row justify="center" align="top">
              <Col xs={4} sm={6} md={4} lg={3}>
                <div style={{ display: 'inline-block', width: 50, height: 50, backgroundColor: 'red' }}>[ img ]</div>
              </Col>
              <Col xs={18} sm={18} md={20} lg={21}>
                <h3 style={{ display: 'inline-block', color: '#1d3557', marginBottom: 5 }}>Sub title</h3>

                <p style={{ color: '#545454' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, praesentium consequuntur fuga quas
                  tempore sed facere ab blanditiis mollitia ullam, eligendi minus qui. Iusto sequi corporis esse, id
                  aliquid quas.
                </p>
              </Col>
            </Row>
          </li>
        ))}
      </StyledUl>
    </div>
  );
};
