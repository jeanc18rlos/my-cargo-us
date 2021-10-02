import React, { ReactElement, forwardRef } from 'react';
import { StyledTopBar } from './styled';

export type TopbarProps = {
  children: ReactElement;
  isLoggedIn?: boolean;
  LoginAction: () => void;
  SignUpAction: () => void;
  LogoutAction: () => void;
}

const TopBar = (props: TopbarProps, ref: any) => {
  const { children, isLoggedIn, LoginAction, SignUpAction, LogoutAction } = props;
  return (
    <StyledTopBar {...(ref ? { ref } : {})}>
      <div className="gx-container">
        <div className="gx-header-horizontal-top-flex">
          <div className="gx-header-horizontal-top-left">
            <i className="icon icon-alert gx-mr-3"></i>
            <div className="gx-mb-0 gx-text-truncate">{children}</div>
          </div>
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <a onClick={() => LogoutAction()}>Logout</a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a onClick={() => SignUpAction()}>Signup</a>
                </li>
                <li>
                  <a onClick={() => LoginAction()}>Login</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </StyledTopBar>
  );
};

export default forwardRef(TopBar);
