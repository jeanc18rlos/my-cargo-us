import { memo } from 'react';

type ButtonProps = {
  children: any;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="gx-header-horizontal-top">
      <div className="gx-container">
        <div className="gx-header-horizontal-top-flex">
          <div className="gx-header-horizontal-top-left">
            <i className="icon icon-alert gx-mr-3" />
          </div>
          <ul className="gx-login-list">
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default memo(Button);
