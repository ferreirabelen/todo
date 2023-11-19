import { Nav } from "../Styles/Navbar"
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



function Navbar(){
    return(
        <Nav>
            <ul>
                <li><a href="#all">Todos los productos</a></li>
                <li><a href="#promos">Promos</a></li>
                <li>Más vendidos</li>
                <li>Sobre nosotros</li>
                <li>Contacto</li>
                <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                
            </ul>
        </Nav>
    )
}
export default Navbar