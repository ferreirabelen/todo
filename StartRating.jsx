import { useState } from "react";
import { DivStars ,StyledIcon,HiddenRadio} from "../Styles/StarComponent";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

function StarRating(){

    const [rating,setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return(
        <DivStars>
            {
                [...Array(5)].map( (star, i) => {
                    const ValueRating = i + 1;
                    return (
                        
                        <>
                        <label key={i}>
                            <HiddenRadio 
                            type="radio" 
                            name="rating" 
                            value={ValueRating} 
                            onClick={() => setRating(ValueRating)}/>
                            <StyledIcon 
                            icon={faStar} 
                            color={ValueRating <= (hover  || rating) ? "yellow" : "#FCF49A"}
                            
                            onMouseEnter={()  => setHover(ValueRating)}
                            onMouseLeave={()  => setHover(null)}
                            />
                        </label>
                        
                        </>
                    )
                    
                })
            }
            <span>  tiene {rating} estrellas </span>
            
        </DivStars>
    )
}

export default StarRating;