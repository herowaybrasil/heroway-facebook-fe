import React from 'react';
import * as ReactRedux from 'react-redux';

import configureStore from '../redux/configureStore';
import Header from './layout/Header';
import Routes from './Routes';

const store = configureStore();

const App: React.FC = () => {
  return (
    <ReactRedux.Provider store={store}>
      <section className="main">
        <Header />
        <Routes />
      </section>
    </ReactRedux.Provider>
  );
};

export default App;
