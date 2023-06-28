import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import axios from 'axios';

const appId = localStorage.getItem('appId');
if (!appId) {
  axios.post(`${process.env.REACT_APP_MY_BOOKSTORE_URL}`)
    .then(response => {
      localStorage.setItem('appId', response.data)
      renderApp();
    }).catch(error => {
      console.log('Error creating app', error)
      
    });  
} else {
  renderApp();
}

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
