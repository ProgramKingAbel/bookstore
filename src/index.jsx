import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import axios from 'axios';

const DisplayError = () => {
  return (
    <div>
      <p>Error Creating App. Please try to refresh the page</p>
    </div>
  )
}

const Index = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const appId = localStorage.getItem('appId');
    if (!appId) {
      axios.post(`${process.env.REACT_APP_MY_BOOKSTORE_URL}`)
        .then(response => {
          localStorage.setItem('appId', response.data)
        }).catch(error => {
          console.error('Error creating app', error)
          setError(true);
             
        });
    }
  }, []);

  if (error) {
    return <DisplayError />;
  }
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
  );
}
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render( <Index />);

