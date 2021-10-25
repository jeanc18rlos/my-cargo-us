import AuthModal from './index';
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { Button } from 'antd';
export default {
  title: 'Components/Organism/AuthModal',
  component: AuthModal,
  argTypes: {
    currentState: {
      options: ['ForgotPassword', 'LockScreen', 'ResetPassword', 'SignIn', 'SignUp'],
      control: { type: 'radio' },
      defaultValue: 'SignUp'
    }
  }
} as Meta;

export const base = ({ currentState }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleCancel = () => setModalVisible(false);
  const handleOk = () => setModalVisible(false);
  return (
    <>
      <div>
        <Button onClick={() => setModalVisible(true)}>set Visible</Button>
      </div>
      <AuthModal
        {...{
          currentState,
          isModalVisible,
          handleCancel,
          handleOk,
          actions: {
            SignIn: () => {},
            SignUp: () => {},
            SignInWithGoogle: () => {}
          }
        }}
      />
    </>
  );
};
