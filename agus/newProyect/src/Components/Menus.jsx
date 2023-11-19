import menuArray from "../data/menus.json"
import {DivContainer,H1,Div, ButtonCarrito} from "../Styles/Menu.js"
import Item from "./Item";

function Menus(){
    

    return(
        <>
        <H1 id="all">Todo nuestro menú</H1>
        <DivContainer>
        {
            menuArray.map((menu) => (
                <Div key={menu.uuid}>
                    <h2>{menu.name}</h2>
                    <p>{menu.description}</p>
                    <p>{menu.price}</p>
                    {menu.discount && <p>Descuento : {menu.discount}</p> }
                    <img src={menu.image} alt="" />
                    <img src={menu.img} alt="" />
                    <Item/>
                    <ButtonCarrito>Añadir al carrito</ButtonCarrito>
                </Div>
            ))
        }
        </DivContainer>
        </>
    )
}
export default Menus;