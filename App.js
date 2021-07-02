import React from 'react';
import Navigate from './src/navigation/Navigate';
import { Provider } from 'react-redux';

import RootStore from './src/store/rootStore';

const App = () => {
  return (
    <Provider store={RootStore}>
      <Navigate />
    </Provider>
  );
};


export default App;