import React from 'react';
import {Provider} from 'react-redux'
import store from "./redux/store";


import './App.css';
import CakeContainer from "./components/cakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <CakeContainer/>
              <HookCakeContainer/>
              <IceCreamContainer/>
          </div>
      </Provider>

  );
}

export default App;
