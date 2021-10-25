import { Button, Form, Input, Row, Col } from 'antd';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import { StyledModalContainer } from './styled';

import sign_up_image from '../../../assets/img/SignIn.png';

const FormItem = Form.Item;

const ForgotPassword = ({ onSubmit }: any) => {
  return (
    <StyledModalContainer>
      <Row className="nm">
        <Col className="np hide-sm" sm={24} md={6} lg={8}>
          <aside>
            <img src={sign_up_image} />
            <h3> Can't Login</h3>
          </aside>
        </Col>
        <Col className="col-wrapper" sm={24} md={18} lg={16}>
          <div className="form-container">
            <div className="gx-login-header gx-text-center">
              <h1 className="gx-login-title">Forgot password</h1>
              <p>Recovering the password is easy. Just tell us the email you have registered with jumbo</p>
            </div>

            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={e => onSubmit(e)}
              //onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0"
            >
              <FormItem rules={[{ required: true, message: 'Please input your E-mail!' }]} name="email">
                <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
              </FormItem>
              <FormItem className="gx-text-center">
                <Button type="primary" htmlType="submit">
                  Send Reset Link
                </Button>
              </FormItem>
            </Form>
          </div>
        </Col>
      </Row>
    </StyledModalContainer>
  );
};

export default ForgotPassword;
