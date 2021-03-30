import React, { useContext } from 'react';
import { CounterContext } from '../App';

function Green() {
    const counterContext = useContext(CounterContext);
    function counterDispatcher(action) {
        counterContext.counterDispatch(action);
    }
    function colorDispatcher(action) {
        counterContext.colorDispatch(action);
    }

    return (
        <div className='changers__item'>
            <h1>Green</h1>
            <button className='changers__increment' onClick={()=> {
                counterDispatcher('increment')
                colorDispatcher('green')
            }}>
                Increase
            </button>
            <button className='changers__decrement' onClick={()=> {
                counterDispatcher('decrement')
                colorDispatcher('green')
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

export default Green;
