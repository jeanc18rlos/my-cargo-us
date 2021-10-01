import { Col, Row } from 'antd';
import { StyledCard } from './styled/card';
import { HeaderText, BodyText } from './styled/text';

type Props = {
  icon: string;
  title: string;
  link: string;
  label: string;
  active?: boolean;
};
export const ShortcutsAtom = (props: Props) => {
  return (
    <StyledCard active={props.active}>
      <Row style={{ height: '100%' }} align="middle">
        <Col span={8} style={{ textAlign: 'center' }}>
          [ IMG ]
        </Col>
        <Col span={16}>
          <HeaderText>{props.label}</HeaderText>
          <BodyText>{props.title}</BodyText>
        </Col>
      </Row>
    </StyledCard>
  );
};
