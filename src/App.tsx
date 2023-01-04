import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducer } from "./counter-reducer/CounterReducer";


function App() {
  return (
    <>
      <Counter initialValue={ 14 }/>
      <CounterBy/>
      <CounterEffect/>
      <CounterHook/>
      <CounterReducer/>
      
      <hr />
    </>

  );
}

export default App;
