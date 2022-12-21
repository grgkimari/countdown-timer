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



const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_INTERVAL:
            console.log("SETTING INTERVAL TO : " + action.payload)
            return {
                ...state,
                interval : action.payload,
            }
        case COUNT_DOWN:
            console.log("COUNTING DOWN")
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
                    console.log("Countdown over!")
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
