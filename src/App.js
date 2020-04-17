import React, { createContext, useReducer } from 'react';

import './global.css';

import Input from './components/Input'
import Simulation from './components/Simulation'

export const AppContext = createContext();

const initialState = {
    mass1: 0,
    mass2: 0,
    theta1: 0,
    theta2: 0,
};

function AppReducer(state, action) {
  switch(action.type) {
      case 'UPDATE_DATA':
        return {
          mass1: action.data.mass1,
          mass2: action.data.mass2,
          theta1: action.data.theta1,
          theta2: action.data.theta2,
        };
        default:
          return initialState;
  }

};



function App() {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  console.log(AppReducer.state);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>React Double Pendulum Simulator</h1>
        <Input />
        <Simulation />
      </div>
    </AppContext.Provider>
  );
}

export default App;
