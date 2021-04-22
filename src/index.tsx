import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import App from './components/App';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
