import { useState } from "react";
import {Title, Container, DivForm, DivRsp,Button} from "../src/Style/Style";

function Form(){{
    const [inputs, setInpunts] = useState("");
    const [resultado, setResultado] = useState("");
    

    const agarraLetras = (e) => {
        e.preventDefault(); 
        setInpunts(e.target.value);
    }

    const Resultado = (e) => {
        e.preventDefault(); 
        setResultado(inputs);
    }


    return(
        <>
        <Title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur, laboriosam distinctio ipsa atque, 
        sunt cumque fugiat necessitatibus error, vel quae magnam minima omnis odio ipsum? Rem natus vitae nostrum.</Title>

        <Container>
            <DivForm>
                <h2>Vamos a encontrar que canciones se pueden formar con las letras!</h2>
                <form action="" onSubmit={Resultado} >
                    <label htmlFor="">Colocar las letras sueltas: </label>
                    <br />
                    <input type="text" value={inputs} onChange={agarraLetras} />
                    <br />
                    <Button type="submit">Buscar</Button>
                </form>
            </DivForm>

            <DivRsp>
                <h2>Los resultados son: </h2>
                <div >{resultado}</div>
            </DivRsp>

        </Container>
        </>
    )
}}

export default Form

