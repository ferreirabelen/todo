import { useState } from "react";



function Form(){
    //const [showVerification, setShowVerification] = useState(false);
    const [showValidation, setShowValidation] = useState(false);
    const [email, setEmail] = useState('');
    const nombre = "laura"
    const letra = nombre.charAt(0)
    console.log(letra)
  //   const nombre = values.nombre.charAt(0).toUpperCase();
  // const apellido = values.apellido.charAt(0).toUpperCase();

    
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowValidation(true);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      if (showValidation) {
        return <div>Bienvenido!</div>
      }
    return (
        <form action="" onSubmit={handleSubmit}>
            <label >nombre</label>
            <input type="text" />
            <label >mail</label>
            <input type="e-mail" value={email} onChange={handleEmailChange}/>
            <button>Enviar</button>
        </form>
    )
}
export default Form