function MiComponente(props){
    return(
        <>
            <p> {props.children} <span>{props.name}</span>  </p>
        </>     
    )
}

export default MiComponente
