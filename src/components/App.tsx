import React from "react";
import * as ReactRedux from "react-redux";

import Header from "./layout/Header";

import configureStore from "../redux/configureStore";
import Routes from "./Routes";

const store = configureStore();

const App: React.FC = () => {
  const ReactReduxProvider = ReactRedux.Provider;

  return (
    <ReactReduxProvider store={store}>
      <section className="main">
        <Header />
        <Routes />
      </section>
    </ReactReduxProvider>
  );
};

export default App;
