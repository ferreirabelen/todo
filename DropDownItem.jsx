
import { LidropDown } from "../Styles/NavComponent"
import { Link } from "react-router-dom"
function DropDownItem(props){
    return(
        <>
        <Link><LidropDown>{props.text}</LidropDown></Link>
        </>

    )
}
export default DropDownItem