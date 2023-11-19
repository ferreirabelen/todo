import CardMovies from "./CardMovies";
import { useState, useEffect } from "react";


function Listado(){
    const API ="https://api.themoviedb.org/3/movie/11?api_key=4d09b9e091c3b90852a1c42e8532a942&language=es-ES&page=1"
    console.log(API)

    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
    const respuesta = await fetch(API);
    const data = await respuesta.json()
    setMovies(data.results)

}

    useEffect(() => {
    getMovies()
    },[])


    return(
        <div>

        {
            movies.map(movie => (
            <div key={movie.id}>
                <CardMovies nombre={movie.title} descripcion={movie.descripcion}/>
            </div>
            ))
        }
        </div>
        
    )
}

export default Listado