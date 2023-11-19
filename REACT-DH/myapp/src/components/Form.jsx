function Form(){
    
    function onSubmitForm(e){
        e.preventDefault();
        console.log("usuario guardado")

    }

    function UserTipeo(){
        console.log("tipeo")
    }


    return(
        <>
        <h3>Iniciar Sesión</h3>
        <form onSubmit={onSubmitForm}/>
        <input
        type="text"
        placeholder="Nombre de usuario"
        onChange={UserTipeo}
        />

        <button type="submit">Enviar</button>
        </> 
    )}

export default Form;