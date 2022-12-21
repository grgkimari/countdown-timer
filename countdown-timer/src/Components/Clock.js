import ClockSection from "./ClockSection"

const Clock = (props) => {
    return(
        <div className="clock">
            <ClockSection title="Hours" content={props.time.hours}/>
            <ClockSection title="Minutes" content={props.time.minutes}/>
            <ClockSection title="Seconds" content={props.time.seconds}/>
        </div>
        )
}

export default Clock