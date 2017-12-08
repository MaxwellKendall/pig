import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

// All Ccommented out code is configuration for redux:

// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';

// import configureStore from './store/configureStore';
// import configureHistory from './history/configureHistory';

import App from './components/App';

require('./scss/index.scss');

// const store = configureStore();
// const history = configureHistory();

// const render = (Component) => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <AppContainer>
//           <Component />
//         </AppContainer>
//       </ConnectedRouter>
//     </Provider>,
//     document.querySelector('.container'),
//   );
// };

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('.container'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}
