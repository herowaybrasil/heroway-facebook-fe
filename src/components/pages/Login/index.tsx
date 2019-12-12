import './styles.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { ReactComponent as GithubLogo } from '../../../assets/img/github-logo.svg';
import { IAppState } from '../../../redux/configureStore';
import { getGithubUser } from '../../../redux/reducers/login';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState<string>("gtosta96");
  const loginState = useSelector((state: IAppState) => state.login);

  function send() {
    dispatch(getGithubUser(email));
  }

  if (loginState.user.login) {
    return <Redirect to="/feed" />;
  }

  return (
    <div className="login-component">
      <div className="login-box">
        <GithubLogo className="github-logo" />

        <input
          className="github-input"
          type="text"
          placeholder="Digite seu usuário do Github"
          defaultValue="gtosta96"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <button className="github-button" disabled={!email} onClick={send}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Login;
