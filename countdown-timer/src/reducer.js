//Default State
export const initialState = {
    timeIsUp : false,
    interval : null,
    timeLeft : {
        hours : 0,
        minutes : 1,
        seconds : 10,
    }
}

//ACTIONS
export const COUNT_DOWN = "COUNT_DOWN"
export const SET_INTERVAL = "SET_INERVAL"
export const CLEAR_INTERVAL = "CLEAR_INTERVAL"
export const RESET = "RESET"



const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case CLEAR_INTERVAL:
            
            clearInterval(state.interval)
            return {
                ...state,
                interval : null
            }
        case RESET:
            if(state.interval !== null){
                clearInterval(state.interval)
            }
            return initialState
        case SET_INTERVAL:
            return {
                ...state,
                interval : action.payload,
            }
        case COUNT_DOWN:
            if(state.timeLeft.seconds > 0){
                return {
                    ...state,
                    timeLeft : {
                        hours : state.timeLeft.hours,
                        minutes : state.timeLeft.minutes,
                        seconds : state.timeLeft.seconds - 1,
                    }
                }
            }
            else{
                if(state.timeLeft.minutes > 0){
                    return {
                        ...state,
                        timeLeft : {
                            hours : state.timeLeft.hours,
                            minutes : state.timeLeft.minutes - 1,
                            seconds : 59,
                        }
                    }
                }
                else if(state.timeLeft.hours > 0){
                    return { ...state,
                        timeLeft : {
                            hours : state.timeLeft.hours - 1,
                            minutes : state.timeLeft.minutes,
                            seconds : state.timeLeft.seconds,
                        }
                    }
                }
                else{
                    clearInterval(state.interval)
                    return {
                        timeIsUp : true,
                        interval : null,
                        timeLeft : {
                            hours : 0,
                            minutes : 0,
                            seconds : 0,
                        }
                    }
                }
            }
        default:
            return {...state}
    }
}

export default mainReducer
