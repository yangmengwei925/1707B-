import React from 'react';

// 引入路由
import {HashRouter} from 'react-router-dom'
import RouterView from './router/RouterView';
import config from './router/router'

// 引入redux
import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <RouterView routes={config.routes}/>
      </HashRouter>
    </Provider>
  );
}

export default App;
