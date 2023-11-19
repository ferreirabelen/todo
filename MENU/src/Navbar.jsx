import { Nav,Ul,SectionLeft,SectionRight,BottonHamburguer, ButtonNav,Slogan} from "./Styles/NavbarComponent"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar(){

    const[click, setClick] = useState(false);

    const ChangeClick = () => {
        setClick(!click)

    }
    return(
    <>
    <Nav>
    <div>
        <SectionLeft>
                
                <Slogan>Tu pasaporte a experiencias inolvidables</Slogan> 
        </SectionLeft>
    </div>
    <SectionRight>
        <BottonHamburguer onClick={() => ChangeClick()}>
            <FontAwesomeIcon icon={faBars}/>
        </BottonHamburguer>
        <Ul click={click}>
            <li>
                <ButtonNav>Registrarte</ButtonNav>
            </li>
            <li>
                <ButtonNav>Iniciar Sesion</ButtonNav>
            </li>
        </Ul>
        
    </SectionRight>
</Nav>
</>




    )
}
export default Navbar

