import { Button, Form, Input, Row, Col } from 'antd';
import LockOutlined from '@ant-design/icons/lib/icons/LockOutlined';
import { StyledModalContainer } from './styled';

import sign_up_image from '../../../assets/img/SignUp.png';

const FormItem = Form.Item;

const ResetPassword = ({ onSubmit }: any) => {
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
              <h1 className="gx-login-title">Reset password</h1>
              <p>Enter a new password for your account</p>
            </div>

            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={e => onSubmit(e)}
              //onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0"
            >
              <FormItem rules={[{ required: true, message: 'Please input your Password!' }]} name="password">
                <Input
                  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              </FormItem>

              <FormItem rules={[{ required: true, message: 'Please input your Password!' }]} name="confirm-password">
                <Input
                  prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Confirm Password"
                />
              </FormItem>

              <FormItem className="gx-text-center">
                <Button type="primary" htmlType="submit">
                  Reset Password
                </Button>
              </FormItem>
            </Form>
          </div>
        </Col>
      </Row>
    </StyledModalContainer>
  );
};

export default ResetPassword;
