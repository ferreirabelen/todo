
import {BGImage,BGgradient,DivContainer,DivInformation,Carrusel, Image} from "../Styles/CardComponent";
import fondo from "../img/fondo.jpeg"


function Card(){
    return(
        <DivContainer>
            <DivInformation>
                <h2>LOREM</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse itaque voluptatibus iure mollitia dignissimos, 
                id dicta incidunt. Dolores natus suscipit, rem repellendus velit ducimus rerum deleniti necessitatibus provident 
                assumenda autem.
                Veniam illum nemo ratione officia eveniet vel aliquam. Nesciunt a voluptates facere minus! Facilis, repellat. 
                Teneturdolor accusantium quasi saepe fuga totam necessitatibus nihil temporibus, nesciunt qui? Sint, sunt ab?
                Autem, vero corrupti. Modi impedit enim, adipisci facilis earum accusamus expedita esse porro, voluptatibus nesciunt 
                numquam excepturi cum laudantium sapiente a commodi? Quod sed obcaecati repudiandae autem iure, maxime vel?
                Harum, quibusdam unde. Harum error, corrupti vero officia eveniet vitae velit, ducimus explicabo aliquid cum non 
                saepe! Sit amet quia excepturi vel cumque dolore corporis sapiente odio inventore, nihil quaerat.</p>
                <p>duration : </p>
                <p>price : </p>

            </DivInformation>

            <Carrusel>
                <button> ←</button>
                <Image src={fondo}/>
                <Image src={fondo}/>
                <Image src={fondo}/>
                <Image src={fondo}/>
                <Image src={fondo}/>
                <button>→</button>
                
            </Carrusel>

            <BGImage>
            <BGgradient>
            </BGgradient>
            </BGImage>

        </DivContainer>
        

        
    
        
    )
}
export default Card