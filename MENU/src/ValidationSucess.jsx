import { DivContainer,DivText ,EmojiText} from "../styles/ValidationSucess"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

function ValidationSucess(){
    return(
        <DivContainer>
            <h1>¡Su cuenta ha sido verificada con exito!</h1>
            <DivText>
            <EmojiText><FontAwesomeIcon icon={faCheckCircle}/></EmojiText>
            <h2>Bienvenido a ExploRAR</h2>
            <p>Esperamos que esta web sea de su agrado, solo le queda iniciar sesion para que comience su aventura</p>
            </DivText>
            <button>Iniciar Sesion</button>
        </DivContainer>
    )
}
export default ValidationSucess;