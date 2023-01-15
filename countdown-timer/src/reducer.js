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
export const INCREMENT_HOURS = "INCREMENT_HOURS"
export const DECREMENT_HOURS = "DECREMENT_HOURS"
export const INCREMENT_MINUTES = "INCREMENT_MINUTES"
export const DECREMENT_MINUTES = "DECREMENT_MINUTES"
export const INCREMENT_SECONDS = "INCREMENT_SECONDS"
export const DECREMENT_SECONDS = "DECREMENT_SECONDS"



const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case INCREMENT_HOURS:
            return {
                ...state,
                timeLeft : {
                    hours : state.timeLeft.hours < 24 ? state.timeLeft.hours + 1 : state.timeLeft.hours,
                    minutes : state.timeLeft.minutes,
                    seconds : state.timeLeft.seconds,
                }
            }
        case DECREMENT_HOURS:
            return {
                ...state,
                timeLeft : {
                    hours : state.timeLeft.hours > 0 ? state.timeLeft.hours - 1 : state.timeLeft.hours,
                    minutes : state.timeLeft.minutes,
                    seconds : state.timeLeft.seconds
                }
            }

        case INCREMENT_MINUTES :
            return {
                ...state,
                timeLeft : {
                    hours : state.timeLeft.hours,
                    minutes : state.timeLeft.minutes < 60 ? state.timeLeft.minutes + 1 : state.timeLeft.minutes,
                    seconds : state.timeLeft.seconds
                }
            }
        case DECREMENT_MINUTES:
            return {
                ...state,
                timeLeft : {
                    hours : state.timeLeft.hours,
                    minutes : state.timeLeft.minutes > 0 ? state.timeLeft.minutes - 1 : state.timeLeft.minutes,
                    seconds : state.timeLeft.seconds,
                }

            }
        case INCREMENT_SECONDS:
            return {
                ...state,
                timeLeft : {
                    hours : state.timeLeft.hours,
                    minutes : state.timeLeft.minutes,
                    seconds : state.timeLeft.seconds < 60 ? state.timeLeft.seconds + 1 : state.timeLeft.seconds,
                }

            }
        case DECREMENT_SECONDS:
            return {
                ...state,
                timeLeft : {
                    hours : state.timeLeft.hours,
                    minutes : state.timeLeft.minutes,
                    seconds : state.timeLeft.seconds > 0 ? state.timeLeft.seconds - 1 : state.timeLeft.seconds,
                }
            }
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
