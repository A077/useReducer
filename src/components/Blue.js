import React, { useContext } from 'react';
import { CounterContext } from '../App';

function Blue() {
    const counterContext = useContext(CounterContext);
    function counterDispatcher(action) {
        counterContext.counterDispatch(action);
    }
    function colorDispatcher(action) {
        counterContext.colorDispatch(action);
    }

    return (
        <div className='changers__item'>
            <h1>Blue</h1>
            <button className='changers__increment' onClick={()=> {
                counterDispatcher('increment')
                colorDispatcher('blue')
            }}>
                Increase
            </button>
            <button className='changers__decrement' onClick={()=> {
                counterDispatcher('decrement')
                colorDispatcher('blue')
            }}>
                Decrease
            </button>
            <button className='changers__reset' onClick={()=> {
                counterDispatcher('reset')
                colorDispatcher('reset')
            }}>
                Reset
            </button>
        </div>
    );
}

export default Blue;
