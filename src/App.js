import React from 'react';
import './scss/style.scss';
import { Provider } from 'react-redux';
import store from './store/createStore';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
 
  return (
    <div className="wrapper">
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </div>
  );
}

export default  App;
