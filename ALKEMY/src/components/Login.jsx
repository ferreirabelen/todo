
import axios from "axios"
import sweetAlert from '@sweetalert/with-react'



function Login(){


    function SubmitForm(e){
        e.preventDefault()


        const email = e.target.email.value;                   //el lugar de tenerlos en estados, tmb se pueden tener asi
        const password = e.target.password.value;
        console.log("mail y contraseña",email, password)

        if(password === "" && email === ""){
            sweetAlert(
                <div>
                    <h3>Los campos no pueden estar vacios</h3>
                </div>
                )
            return 
            
        }

        const validarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if(email !== "" && !validarEmail.test(email)){        //si el mail es distinto a vacio pero es distinto al test(false) no e valido
            sweetAlert(
                <div>
                    <h3>El Email debe ser valido</h3>
                </div>
                )
                return;
        }

        if (email !== "a@gmail.com" || password !== "react" ){
            sweetAlert(
                <div>
                    <h3>Credenciales invalidas</h3>
                </div>
                )
        return 

        }

        else{
            
            sweetAlert({
                    title: "Se ha registrado correctamente!",
                    icon: "success",
                    button: "ok",
                })
                

        }

        axios.post("http://challenge-react.alkemy.org", {email, password})
        .then(res => {
            sweetAlert(<h2>Perfecto, ingresaste correctamente</h2>);
            console.log(res.data);
            const token = res.data.token;
            sessionStorage.setItem("token", token);
            
            
        })
        
    }



    return(
        <>
        <form action="" onSubmit={SubmitForm}>
        
            <label htmlFor="">
                <span>Correo: </span>
                <input type="text" name="email"/>
            </label>

            <br />

            <label htmlFor="">
                <span>Contraseña; </span>
                <input type="password" name="password"/>
            </label>

            <button type="submit">Registrarte</button>
            
        </form>
        </>
    )
}

export default Login