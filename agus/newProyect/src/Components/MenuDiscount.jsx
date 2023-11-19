
import menuArray from "../data/menus.json"
import {DivContainer,H1,Div} from "../Styles/MenuWithDiscount.js"
import { ButtonCarrito } from "../Styles/Menu";
import Item from "./Item";
function MenusDiscount(){
    return(
        <>
        <H1 id="promos">Nuestros descuentos</H1>
        <DivContainer>
        {
            menuArray
            .filter((menu) => menu.discount !== null)
            .map((menu) => (
                <Div key={menu.uuid}>
                    <h2>{menu.name}</h2>
                    <p>{menu.description}</p>
                    <p>{menu.price}</p>
                    <p>descuento de : {menu.discount}</p>  
                    <p>Precio final : {menu.price - menu.discount}</p>
                    <Item/>
                    <ButtonCarrito>Añadir al carrito</ButtonCarrito>
                </Div>
                )
            )
        }
        </DivContainer>
        </>
    )
}
export default MenusDiscount;