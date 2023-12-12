import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layout/App.tsx';
import './style/index.css';
import { BrowserRouter } from 'react-router-dom';
import RootRouter from './router/RootRouter.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { store } from './store/index.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/map">
      <Provider store={store}>
        <App>
          <ToastContainer />
          <RootRouter />
        </App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
