import { DivContainer,DivText ,EmojiText} from "../styles/ValidationEmail"
function ValidationRegister({email}){
    return(

        <DivContainer>
            <h1>Verificacion de Cuenta</h1>
            <DivText>
            <EmojiText>✉</EmojiText>
            <h2>Estas a un paso de acceder a experiencias inolvidables</h2>
            <p>Te enviaremos un mail al {email} el cual  tendrá un link para verificar tu cuenta</p>
            </DivText>
            <a href="#">No recibiste el correo? Haz click aquí para reenviar</a>
        </DivContainer>
    )
}
export default ValidationRegister