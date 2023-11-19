import { FooterStyle } from "../Styles/FooterComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRainbow} from "@fortawesome/free-solid-svg-icons"


function Footer(){
    return(
        <FooterStyle>
            <div>
                ©2023 grupo 5 proyecto final Integrador
            </div>
            <div>
                
                <FontAwesomeIcon icon={faRainbow} className="iconFooter"/>
                <FontAwesomeIcon icon={faRainbow} className="iconFooter"/>
                <FontAwesomeIcon icon={faRainbow} className="iconFooter"/>
                <FontAwesomeIcon icon={faRainbow} className="iconFooter"/>
                
            </div>
            
        </FooterStyle>

    )
}

export default Footer;