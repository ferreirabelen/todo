


function Productos({name, img, price}){
    return(
        <>
        <ul className="lista">
            <li>{name}</li>
            <li>{img}</li>
            <li>{price}</li>
        </ul>
        
        </>

    )
}

export default Productos