import React, { useState, useEffect } from 'react';
// Component
import { MainLayout, HeroSlider, AuthModal } from 'mcu-ui-kit';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { useDispatch } from 'react-redux';
import { hideMessage } from '../../state/actions/Auth';
import { SIGNIN_GOOGLE_USER, SIGNIN_USER, SIGNOUT_USER, SIGNUP_USER } from '../../state/actionTypes';
const languageData = [
  {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  },
  {
    languageId: 'chinese',
    locale: 'zh',
    name: 'Chinese',
    icon: 'cn'
  },
  {
    languageId: 'spanish',
    locale: 'es',
    name: 'Spanish',
    icon: 'es'
  },
  {
    languageId: 'french',
    locale: 'fr',
    name: 'French',
    icon: 'fr'
  },
  {
    languageId: 'italian',
    locale: 'it',
    name: 'Italian',
    icon: 'it'
  },
  {
    languageId: 'saudi-arabia',
    locale: 'ar',
    name: 'Arabic',
    icon: 'sa'
  }
];

const topbar = {
  label: 'Covid 19 Disclaimer Advise, click Here, to know more ',
  link: '/covid-advice'
};

const Index = () => {
  const initialState: any = 'SignIn';
  const [currentState, setCurrentState] = useState(initialState);
  const auth = useSelector((state: any) => state.firebase.auth);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const dispatch = useDispatch();

  const { alertMessage, showMessage, authUser } = useSelector(({ auth }: any) => auth);

  const SignUp = (value: any) => {
    console.dir(value);
    return dispatch({
      type: SIGNUP_USER,
      payload: { password: value.password, email: value.email }
    });
  };

  const SignIn = (value: any) => {
    console.dir(value);
    return dispatch({
      type: SIGNIN_USER,
      payload: { password: value.password, email: value.email }
    });
  };
  const SignInWithGoogle = () => {
    return dispatch({
      type: SIGNIN_GOOGLE_USER
    });
  };
  const SignOut = () => {
    return dispatch({ type: SIGNOUT_USER });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const LogoutAction = () => SignOut();
  const LoginAction = () => {
    setCurrentState('SignIn');
    showModal();
  };
  const SignUpAction = () => {
    setCurrentState('SignUp');
    showModal();
  };

  const onToggleCollapsedNav = () => {
    setSidebarCollapsed(true);
  };
  useEffect(() => {
    document.body.classList.add('full-layout');
    return () => document.body.classList.remove('full-layout');
  }, []);
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 1000);
    }
    if (authUser) {
      setIsModalVisible(false);
    }
  }, [showMessage, authUser]);

  return (
    <MainLayout
      {...{
        topbar,
        sidebarCollapsed,
        setSidebarCollapsed: () => {
          setSidebarCollapsed(false);
        },
        navStyle: 'sidebarOnly',
        onToggleCollapsedNav,
        isLoggedIn: isLoaded(auth) && !isEmpty(auth),
        LogoutAction,
        SignUpAction,
        LoginAction,
        languageData,
        locale: languageData[0],
        user: isLoaded(auth) && !isEmpty(auth) ? auth : null
      }}
    >
      <AuthModal
        currentState={currentState}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        actions={{ SignUp, SignIn, SignInWithGoogle }}
        showMessage={showMessage}
        alertMessage={alertMessage}
      />
      <div className="css-njbp03">
        
        <h1 className="Heading__Heading___83D3K css-1rs3kto" data-test-id="cf-ui-heading">
          Welcome to your <strong className="css-35ezg3">CUST-CHMN-CL-BECUST</strong> space
        </h1>

        <p className="Subheading__Subheading___2mA9j css-6b53fz" data-test-id="cf-ui-subheading">
          Use this space to create and publish content with others from your organization.
          <br />
          Explore ways to get started below.
        </p>
      </div>
    </MainLayout>
  );
};

export default Index;
