import { HTMLProps, ReactNode } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ResetPassword from './ResetPassword';
import ForgotPassword from './ForgotPassword';
import LockScreen from './LockScreen';
import { StyledModal } from './styled';
import { message } from 'antd';

enum ModalStates {
  'ForgotPassword',
  'LockScreen',
  'ResetPassword',
  'SignIn',
  'SignUp'
}

export type userCredentials = { password: string; email: string };

export interface AuthModalActions {
  SignUp: (value: userCredentials) => void;
  SignIn: (value: userCredentials) => void;
  SignInWithGoogle: () => void;
}

interface AuthModalProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  currentState: keyof typeof ModalStates;
  actions: AuthModalActions;
  showMessage?: boolean;
  alertMessage?: any;
}

const AuthModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  currentState,
  showMessage,
  alertMessage,
  actions
}: AuthModalProps & HTMLProps<ReactNode>) => {
  const getAuthContainer = () => {
    switch (currentState) {
      case 'ForgotPassword':
        return <ForgotPassword />;
      case 'LockScreen':
        return <LockScreen />;
      case 'ResetPassword':
        return <ResetPassword />;
      case 'SignIn':
        return <SignIn {...{ actions }} />;
      case 'SignUp':
        return <SignUp {...{ actions }} />;
      default:
        return <SignIn {...{ actions }} />;
    }
  };

  return (
    <StyledModal footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {getAuthContainer()}
      {showMessage && message.error(alertMessage.toString())}
    </StyledModal>
  );
};

export default AuthModal;
