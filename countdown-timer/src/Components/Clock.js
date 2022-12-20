import ClockSection from "./ClockSection"

const Clock = (props) => {
    return(
        <div className="clock">
            <ClockSection title="Hours" content="3"/>
            <ClockSection title="Minutes" content="3"/>
            <ClockSection title="Seconds" content="3"/>
        </div>
        )
}

export default Clock