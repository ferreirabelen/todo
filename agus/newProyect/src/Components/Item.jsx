import { useState } from "react";
import { DivItem } from "../Styles/Menu";

function Item(){
    const [cant, setCant] = useState(1);

    const suma = () => {
        setCant(cant + 1)
    }

    const resta = () => {
        if (cant > 1) {
            setCant(cant - 1);
        }
    }
    return(
        <DivItem>
            <button onClick={resta}>-</button>
            <p>{cant}</p>
            <button onClick={suma}>+</button>
        </DivItem>
    )
}

export default Item