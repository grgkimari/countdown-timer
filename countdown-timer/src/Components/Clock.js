import ClockSection from "./ClockSection"
import { DECREMENT_HOURS, DECREMENT_MINUTES, DECREMENT_SECONDS, INCREMENT_HOURS, INCREMENT_MINUTES, INCREMENT_SECONDS } from "../reducer"

const Clock = (props) => {
    return(
        <div className="clock">
            <ClockSection title="Hours" content={props.time.hours} incrementProp = {INCREMENT_HOURS} decrementProp = {DECREMENT_HOURS}/>
            <ClockSection title="Minutes" content={props.time.minutes} incrementProp={INCREMENT_MINUTES} decrementProp = {DECREMENT_MINUTES}/>
            <ClockSection title="Seconds" content={props.time.seconds} incrementProp={INCREMENT_SECONDS} decrementProp = {DECREMENT_SECONDS}/>
        </div>
        )
}

export default Clock