import React, { useContext } from 'react';
import { CounterContext } from '../App';

function Red() {
    let count;
    const counterContext = useContext(CounterContext);
    function counterDispatcher(action) {
        counterContext.counterDispatch(action);
    }
    function colorDispatcher(action) {
        counterContext.colorDispatch(action);
    }
    function getCount(){
        return counterContext.count;
    }

    return (
        <div className='changers__item'>
            <h1>Red</h1>
            <button className='changers__increment' onClick={(e)=> {
                counterDispatcher('increment')
                colorDispatcher('red')
            }}>
                Increase
            </button>
            <button className='changers__decrement' onClick={()=> {
                counterDispatcher('decrement')
                colorDispatcher('red')
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

export default Red;
