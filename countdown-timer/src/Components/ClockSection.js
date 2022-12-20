

const ClockSection = (props) => {
    return(
        <div className="clockSection">
        <h3 className="clockSectionTitle">{props.title}</h3>
        <p className="clockSectionContent">{props.content}</p>
        </div>)
}

export default ClockSection