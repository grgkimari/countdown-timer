import './App.css';
import Clock from './Components/Clock'
import { useReducer} from 'react'
import mainReducer, {initialState} from './reducer'
import {COUNT_DOWN, SET_INTERVAL} from './reducer'


function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  console.log("STATE : " + JSON.stringify(state))
  return (
    <div className="App">
      <Clock time ={state.timeLeft}/>
      <button className="controls" onClick={() => dispatch({
        type : SET_INTERVAL,
        payload : setInterval(
          () => {
            dispatch({type : COUNT_DOWN})
          }, 1000
        )
        })}>{state.timeIsUp === false && state.interval !== null ? "Stop" : state.timeIsUp && state.interval === null ? "Time is up" : "Start" }</button>
      <button className="controls">Reset</button>
      <div className='controls'>{JSON.stringify(state)}</div>
    </div>
  );
}

export default App;
