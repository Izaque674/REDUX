import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes';
import AuthProvider from './context/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import Demo from '../src/pages/demo/index';
import store from '../src/pages/demo/store';
import { ChatProvider } from './context/Context';
import Header from './components/Header';
import { createRoot } from 'react-dom';
import { Link } from 'react-router-dom';

function RouterComponent() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ChatProvider>
          <ToastContainer autoClose={3000} />
          <RoutesApp />
        </ChatProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Demo />
  </Provider>
);

function App() {
  return <RouterComponent />;
}

export default App;