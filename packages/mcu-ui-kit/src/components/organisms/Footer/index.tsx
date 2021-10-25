import { StyledFooter, StyledBottomBar } from './styled';
import { Col, Row, Button, Form, Input } from 'antd';

import {
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
  MessageOutlined,
  PhoneFilled
} from '@ant-design/icons';

import { Link } from '../../atoms';
import { Media } from '../../../theme/config/breakpoints';
import { LogoDark } from '../../../assets';

const FormItem = Form.Item;

const services = ['Assited Purchase', 'Freight Shipping', 'Pickup Service', 'Food Shipping'];
const support = ['How Does It Work?', 'Before Shipping', 'What not to send?', 'F.A.Q', 'Contact'];

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="gx-container">
          <Row className="footer-top">
            <Col lg={8} md={12} sm={24}>
              <Link to={'/'} className="brand gx-d-block gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo">
                <img className="gx-brand" alt="My Cargo US" src={LogoDark} />
              </Link>
            </Col>
            <Col className="subscription-container" lg={16} md={12} sm={24}>
              <p>Sign up for industry alerts, insights from My Cargo US{'  '}</p>
              <Form initialValues={{ remember: true }} name="basic" layout="inline">
                <FormItem rules={[{ required: true, message: 'Please input Your email address' }]} name="email">
                  <Input type="email" placeholder="Your email address" />
                </FormItem>
                <FormItem>
                  <Button className="gx-mb-0" type="primary" htmlType="submit">
                    Sign Up
                  </Button>
                </FormItem>
              </Form>
              <Media lessThan="md">
                <br />
                <ul className="gx-social-link">
                  <li>
                    <InstagramOutlined />
                  </li>
                  <li>
                    <YoutubeOutlined />
                  </li>
                  <li>
                    <TwitterOutlined />
                  </li>
                  <li>
                    <WhatsAppOutlined />
                  </li>
                  <li>
                    <MessageOutlined />
                  </li>
                </ul>
              </Media>
            </Col>
          </Row>
          <Row className="footer-bottom">
            <Col lg={10} md={12} sm={24}>
              <h3>About</h3>
              <p>
                With our import service from Miami and New York, you can ship packages or freight to any city in Latin
                America, the Caribbean or the world where shipping services can reach. When it comes to freight and
                shipping services, My Cargo US has no frontiers!
              </p>
              <Media greaterThan="sm">
                <h3>Follow Us:</h3>
                <ul className="gx-social-link">
                  <li>
                    <InstagramOutlined />
                  </li>
                  <li>
                    <YoutubeOutlined />
                  </li>
                  <li>
                    <TwitterOutlined />
                  </li>
                  <li>
                    <WhatsAppOutlined />
                  </li>
                  <li>
                    <MessageOutlined />
                  </li>
                </ul>
              </Media>
            </Col>
            <Col lg={4} md={12} sm={12} xs={24}>
              <h3>Services</h3>
              <ul>
                {services.map((item, index) => (
                  <li key={`services-${index}`}>
                    <Link to="/sample">
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={4} md={12} sm={12} xs={24}>
              <h3>Support</h3>
              <ul>
                {support.map((item, index) => (
                  <li key={`support-${index}`}>
                    <Link to="/sample">
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={6} md={12} sm={24}>
              <h3>Contact Us</h3>
              <p>If you have any questions or need help, feel free to contact with our team.</p>
              <span className="phone-number">
                <PhoneFilled />
                +1 (305) 677-3506
              </span>

              <p>2001 SW 101st Ave, Ste D Miramar, FL 33025-1850 United States</p>
            </Col>
          </Row>
        </div>
      </StyledFooter>
      <StyledBottomBar>
        <div className="gx-container">
          <div className="gx-header-horizontal-main-flex">Copyright © mycargo.us. All Rights Reserved 2021</div>
        </div>
      </StyledBottomBar>
    </>
  );
};
