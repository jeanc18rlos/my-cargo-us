import { Col, Row } from 'antd';
import { StyledCard } from './styled/card';
import { HeaderText, BodyText } from './styled/text';

export const SingleShortcutsAtom = () => {
  return (
    <StyledCard>
      <Row align="middle">
        <Col sm={24} style={{ textAlign: 'center' }}>
          <div style={{ width: 80, height: 80, display: 'inline-block', backgroundColor: 'red' }}>[ IMG ]</div>
          <HeaderText>1.085m</HeaderText>
          <BodyText>Delivered goods</BodyText>
        </Col>
      </Row>
    </StyledCard>
  );
};
