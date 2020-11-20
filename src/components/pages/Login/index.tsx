import React from "react";
import * as ReactRedux from "react-redux";
import * as ReactRouterDOM from "react-router-dom";

import { ReactComponent as GithubLogo } from "../../../assets/img/github-logo.svg";
import { PATHS } from "../../../config/constants";
import { IReducers } from "../../../redux/configureStore";
import { getGithubUser } from "../../../redux/reducers/github";

const Login: React.FC = () => {
  const history = ReactRouterDOM.useHistory();

  const dispatch = ReactRedux.useDispatch();
  const [user, setUser] = React.useState("Gtosta96");

  const githubState = ReactRedux.useSelector((reducers: IReducers) => {
    return reducers.github;
  });

  React.useEffect(() => {
    if (githubState.user) {
      history.push(PATHS.FEED);
    }
  }, [githubState, history]);

  function handleChange(event) {
    const value = event.currentTarget.value;
    setUser(value);
  }

  function handleOnEnter(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    const action = getGithubUser(user);
    dispatch(action);
  }

  return (
    <div className="login">
      <div className="login-box">
        <GithubLogo className="github-logo" />

        <input
          className="github-input"
          type="text"
          placeholder="Digite seu usuário do Github"
          value={user}
          onChange={handleChange}
          onKeyDown={handleOnEnter}
        />

        <span>{githubState.errorMessage}</span>

        <button onClick={handleClick} className="github-button" disabled={githubState.loading}>
          {githubState.loading ? "Loading" : "Enviar"}
        </button>
      </div>
    </div>
  );
};

export default Login;
