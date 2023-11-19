
import { Link } from "react-router-dom"

function Nav(){
    return(
        <nav className="nav">
            <ul>
                <li><Link to="/">︽ Home</Link></li>
                <li><Link to="/listado">♢ Listado</Link></li>
                <li><Link to="contacto">✉ Contacto</Link></li>
                
            </ul>
        </nav>
        
    
        

    )
}

export default Nav