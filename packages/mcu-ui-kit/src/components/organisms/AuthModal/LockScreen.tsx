import { Button, Form, Input, Row, Col, Avatar } from 'antd';
import { StyledModalContainer } from './styled';

const FormItem = Form.Item;

const LockScreen = ({ onSubmit }: any) => {
  return (
    <StyledModalContainer>
      <Row className="nm">
        <Col className="col-wrapper" sm={24} md={18} lg={16}>
          <div className="form-container" style={{ textAlign: 'center' }}>
            <div className="gx-login-header">
              <Avatar shape="circle" className="gx-size-120" src={'https://via.placeholder.com/150'} />
            </div>
            <div className="gx-mb-4">
              <h3>John Smith</h3>
              <p>Enter your password to unlock the screen!</p>
            </div>

            <Form initialValues={{ remember: true }} name="basic" className="gx-signin-form gx-form-row0">
              <FormItem rules={[{ required: true, message: 'Please input your Password!' }]} name="password">
                <Input className="gx-input-lineheight" type="password" placeholder="Password" />
              </FormItem>

              <FormItem>
                <Button type="primary" htmlType="submit">
                  Unlock
                </Button>
              </FormItem>
            </Form>
          </div>
        </Col>
      </Row>
    </StyledModalContainer>
  );
};

export default LockScreen;
