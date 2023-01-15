import './App.css';
import Clock from './Components/Clock'
import React, { useReducer, useContext} from 'react'
import mainReducer, {COUNT_DOWN, SET_INTERVAL, RESET, CLEAR_INTERVAL, initialState} from './reducer'

export const DispatchContext = React.createContext()

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
      <Clock time ={state.timeLeft}/>

      </DispatchContext.Provider>
      <button className="controls" onClick={() => {
        if(state.interval === null){
          dispatch({
            type : SET_INTERVAL,
            payload : setInterval(
              () => {
                dispatch({type : COUNT_DOWN})
              }, 1000
            )
            })
        }
        else{
          dispatch({type : CLEAR_INTERVAL})
        }
      }
      }>{state.timeIsUp === false && state.interval !== null ? "Stop" : state.timeIsUp && state.interval === null ? "Time is up" : "Start" }</button>
      <button className="controls" onClick={() => dispatch({type : RESET})}>Reset</button>
      
    </div>
  );
}

export default App;
