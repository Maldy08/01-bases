import { useReducer } from 'react'
import { CounterState } from './interfaces/interfaces'
import { counterReducer } from './state/counterReducer';
import * as actions from './actions/action';

const INITIAL_STATE: CounterState = {
    changes: 0,
    counter: 0,
    previous: 0
}


export const CounterReducer = () => {
    //const [counter, setCounter] = useState( 0 );
    const [ counterState, dispatch ] = useReducer(counterReducer, INITIAL_STATE);

    const handleReset = () => {
       dispatch( actions.doReset() )
    }

    const increaseBy = ( value: number ) => {
        // dispatch( { type: 'increaseBy', payload: { value }})
        dispatch( actions.doIncreaseBy( value ) );
    }

  return (
    <>
        <h1>Counter Reducer Segmentado</h1>
        <pre>
            { JSON.stringify( { counterState })}
        </pre>
        <button onClick={ handleReset }>
            Reset
        </button>
        <button onClick={ () => increaseBy(1) }>
            +1
        </button>
        <button onClick={ () => increaseBy(2) }>
            +2
        </button>
        <button onClick={ () => increaseBy(3) }>
            +3
        </button>
        <button onClick={ () => increaseBy(4) }>
            +4
        </button>
    
    </>
  )
}
