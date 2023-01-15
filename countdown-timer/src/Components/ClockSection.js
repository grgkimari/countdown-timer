import { useContext } from "react"
import { DispatchContext } from "../App"




const ClockSection = (props) => {
    const dispatch = useContext(DispatchContext)
    return(
        <div className="clockSection">
        <h3 className="clockSectionTitle">{props.title}</h3>
        
        <button className="btn plusBtn"
        onClick={
            () => {
                dispatch({
                    type : props.incrementProp
                })
            }
        }
        > + </button>
        <p className="clockSectionContent">{props.content}</p>
        <button className="btn minusBtn"
        onClick={
            () => {
                dispatch({
                    type : props.decrementProp
                })
            }
        }
        > - </button>

        </div>)
}

export default ClockSection