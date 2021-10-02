import React from 'react';
import { Card, Col, Row, Dropdown, Menu, Button } from 'antd';
// Component
import Icon, {
  LeftOutlined,
  RightOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
  SearchOutlined
} from '@ant-design/icons';

export default {
  title: 'Components/Atoms/Button',
  component: Button
};
const ButtonGroup = Button.Group;
function handleMenuClick(e) {}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

export const all = () => {
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24}>
        {/*Basic*/}
        <Card className="gx-card" title="Basic">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </Card>
        {/*Loading*/}

        {/*Disabled */}
        <Card className="gx-card" title="Disabled">
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>
            Primary(disabled)
          </Button>
          <br />
          <Button>Default</Button>
          <Button disabled>Default(disabled)</Button>
          <br />
          <Button type="dashed">Dashed</Button>
          <Button type="dashed" disabled>
            Dashed(disabled)
          </Button>
          <div className="gx-bg-grey gx-px-3 gx-pt-3">
            <Button>Ghost</Button>
            <Button disabled>Ghost(disabled)</Button>
          </div>
        </Card>
      </Col>

      <Col lg={12} md={12} sm={24} xs={24}>
        <Card className="gx-card" title="Icon">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button shape="circle" icon={<SearchOutlined />} />
          <Button icon={<SearchOutlined />}>Search</Button>
          <br />
          <Button shape="circle" icon={<SearchOutlined />} />
          <Button icon={<SearchOutlined />}>Search</Button>
          <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          <Button type="dashed" icon={<SearchOutlined />}>
            Search
          </Button>
        </Card>

        <Card className="gx-card" title="Multiple">
          <Button type="primary">primary</Button>
          <Button>secondary</Button>
          <Dropdown overlay={menu}>
            <Button>
              Actions <Icon type="down" />
            </Button>
          </Dropdown>
        </Card>
        {/* ButtonGroups */}
        <Card className="gx-card" title="Button Groups">
          <h4>Basic</h4>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>L</Button>
            <Button>M</Button>
            <Button>R</Button>
          </ButtonGroup>

          <h4>With Icon</h4>
          <ButtonGroup>
            <Button type="primary">
              <LeftOutlined />
              Go back
            </Button>
            <Button type="primary">
              Go forward
              <RightOutlined />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button type="primary" icon={<CloudOutlined />} />
            <Button type="primary" icon={<CloudDownloadOutlined />} />
          </ButtonGroup>
        </Card>

        {/*GhostButton */}
        <Card title="Ghost Button" className="gx-card gx-bg-grey">
          <Button type="primary" ghost>
            Primary
          </Button>
          <Button ghost>Default</Button>
          <Button type="dashed" ghost>
            Dashed
          </Button>
          <Button type="danger" ghost>
            danger
          </Button>
        </Card>
      </Col>
    </Row>
  );
};
