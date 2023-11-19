import {DivBuscador, Formulario,ImputBuscador,InputSelect,ButtonBuscador} from "../Styles/Buscador.js"


function Buscador(){
    return(
        <DivBuscador>
            <h1>¿Listo para vivir algo nuevo?</h1>

            <Formulario action="">
                <InputSelect name="" id="">
                    <option value="" disabled="">¿A dónde vamos?</option>
                    <option value="">cuidad 1</option>
                    <option value="">cuidad 2</option>
                    <option value="">cuidad 3</option>
                    <option value="">cuidad 4</option>
                </InputSelect>

                <ImputBuscador type="date"/>

                <ButtonBuscador>Buscar</ButtonBuscador>

            </Formulario>
        </DivBuscador>
    )
}
export default Buscador