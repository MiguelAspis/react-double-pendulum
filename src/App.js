import React, { createContext, useReducer } from 'react';

import './global.css';

import Input from './components/Input'
import Simulation from './components/Simulation'

export const AppContext = createContext();

const data = {
    mass1: 1,
    mass2: 1,
    theta1: 0,
    theta2: 0
};

const AppReducer = (data, action)  => {

  switch(action.type) {
      case 'UPDATE_DATA':
        data.mass1 = action.data.mass1;
        data.mass2 = action.data.mass2;
        data.theta1 = action.data.theta1;
        data.theta2 = action.data.theta2;
        return {
          ...data,
        };
        default:
          return data;
  }

};



function App() {
  const [state, dispatch] = useReducer(AppReducer, data);
  return (
    <div className="App">
      <AppContext.Provider value={{ state, dispatch }}>
        
          <h1>React Double Pendulum Simulator</h1>
          <div className="content_container">
          <Input />
          <Simulation />
          </div>
        
      </AppContext.Provider>
    </div>
  );
}

export default App;
