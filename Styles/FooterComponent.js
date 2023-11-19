import styled from "styled-components";


export const FooterStyle = styled.footer`
  background-color: #c2f1f1;
  padding:10px;
  padding-top: 15px;
  position: fixed;
  bottom:0 ;
  width:100%;
  DISPLAY:flex;
  justify-content:space-between;
  .iconFooter{                  
    padding-right: 20px;            //icono no tan pegado al margin
  }
  @media (max-width:912px){
    .iconFooter{
      padding-right: 10px;
      margin-right: 20px;
    }
  }
  @media (max-width:600px){
      .iconFooter{      //le di estilo con una clase ya que no recordaba como llamar al icono, cambia lo que necesites 
        display: none;
      } 
      footer div {
        font-size: 14px;
    }
  }
`
