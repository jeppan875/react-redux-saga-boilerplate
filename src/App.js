import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import FrontPage from './containers/FrontPage'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FrontPage></FrontPage>
      </Provider>
    </div>
  );
}

export default App;
