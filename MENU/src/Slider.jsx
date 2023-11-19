


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {DIV,DIVCONTENEDOR} from "./Styles/SlideComponent"


function Category() {
  
    return (
      <DIVCONTENEDOR >
        <h2>Responsive</h2>
            {[1,2,3,4,5].map((item,index) => {
                return <DIV key={index} >
                      <h3></h3>
                      <p>{item}</p>
                    </DIV>
            })}
        
      </DIVCONTENEDOR>
    );
}

  export default Category;


