import React, { useReducer } from 'react';
import Red from './components/Red';
import Green from './components/Green';
import Blue from './components/Blue';
import './App.css'

export const CounterContext = React.createContext();

const initialCounter = 0;
const initialColor = 'changers__item_color_black';

function checkCounter (state, operation){
    let action, types = [];
    if (operation === 0)
        state = 0;
    if (state+operation > 4){
        types[0] = document.querySelectorAll("button.changers__increment")
        action = 'disable'
    }
    else if (state+operation < -4){
        types[0] = document.querySelectorAll("button.changers__decrement")
        action = 'disable'
    }
    else{
        types[0] = document.querySelectorAll("button.changers__increment")
        types[1] = document.querySelectorAll("button.changers__decrement")
        action = 'enable'
    }
    types.forEach(elems => {
        elems.forEach(elem => {
            if (action === 'disable'){
                elem.disabled = true;
            }
            if (action === 'enable'){
                elem.disabled = false;
            }
        })
    })
}

function counterReducer(state, action) {
    switch (action) {
        case 'increment':
            checkCounter(state, 1)
            return state + 1;
        case 'decrement':
            checkCounter(state, -1)
            return state - 1;
        case 'reset':
            checkCounter(state, 0)
            return initialCounter;
        default:
            return state;
    }
}

function colorReducer(state, action) {
    switch (action) {
        case 'red':
            return 'changers__item_color_red';
        case 'green':
            return 'changers__item_color_green';
        case 'blue':
            return 'changers__item_color_blue';
        case 'reset':
            return initialColor;
        default:
            return state;
    }
}

function App() {
    const [count, counterDispatch] = useReducer(counterReducer, initialCounter);
    const [color, colorDispatch] = useReducer(colorReducer, initialColor);

    return (
      <CounterContext.Provider value={{ count: count, counterDispatch: counterDispatch, colorDispatch: colorDispatch }}>
          <div className="changers">
              <h1 className={color}>COUNT: {count} </h1>
              <Red/>
              <Green/>
              <Blue/>
          </div>
      </CounterContext.Provider>
  );
}

export default App;
