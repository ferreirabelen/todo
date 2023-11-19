function CardMovies({title, descripcion}){
    return(
        <div className="row" >

        <div className="col-3" >

            <div class="card" >
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{descripcion}</p>
            <a href="/" class="btn btn-primary">Ver detalle</a>
            </div>
            </div>

        </div>
            
            
        </div>

    )
}

export default CardMovies