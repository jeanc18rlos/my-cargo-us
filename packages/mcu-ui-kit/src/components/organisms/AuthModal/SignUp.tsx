import { Button, Checkbox, Form, Input, Row, Col } from 'antd';
import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import LockOutlined from '@ant-design/icons/lib/icons/LockOutlined';
import GoogleOutlined from '@ant-design/icons/lib/icons/GoogleOutlined';
import FacebookOutlined from '@ant-design/icons/lib/icons/FacebookOutlined';
import TwitterOutlined from '@ant-design/icons/lib/icons/TwitterOutlined';
import { StyledModalContainer } from './styled';
import { AuthModalActions, userCredentials } from './';

import sign_up_image from '../../../assets/img/SignUp.png';

const FormItem = Form.Item;

const SignUp = ({ actions }: { actions: AuthModalActions }) => {
  const onSubmit = (user: userCredentials) => {
    actions.SignUp(user);
  };
  const signInWithGoogle = () => {
    actions.SignInWithGoogle();
  };
  return (
    <StyledModalContainer>
      <Row className="nm">
        <Col className="np hide-sm" sm={24} md={6} lg={8}>
          <aside>
            <img src={sign_up_image} />
            <h3> Are you ready to buy and ship with My Cargo Us?</h3>
          </aside>
        </Col>
        <Col className="col-wrapper" sm={24} md={18} lg={16}>
          <div className="form-container">
            <div className="gx-login-header gx-text-center">
              <h1 className="gx-login-title">Sign Up</h1>
            </div>

            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onSubmit}
              className="gx-signin-form gx-form-row0"
            >
              <FormItem rules={[{ required: true, message: 'Please input your E-mail!' }]} name="email">
                <Input
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="email"
                  placeholder="Email"
                />
              </FormItem>
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

              <FormItem name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </FormItem>
              <FormItem className="gx-text-center">
                <Button type="primary" htmlType="submit">
                  Sign Up
                </Button>
              </FormItem>
            </Form>

            <div className="gx-flex-row">
              <span className="gx-mb-2 gx-mr-3">or Sign up using: </span>
              <ul className="gx-social-link">
                <li>
                  <GoogleOutlined onClick={() => signInWithGoogle()} />
                </li>
                {/**
                  *  <li>
                  <FacebookOutlined onClick={() => {}} />
                </li>

                <li>
                  <TwitterOutlined onClick={() => {}} />
                </li>
                  */}
              </ul>
            </div>
            <br />
            <br />

            <a className="gx-login-form-forgot" href="/custom-views/user-auth/forgot-password">
              Do you have an account?
            </a>
          </div>
        </Col>
      </Row>
    </StyledModalContainer>
  );
};

export default SignUp;
