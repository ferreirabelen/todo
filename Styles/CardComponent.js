import styled from "styled-components";
import fondo from "../img/fondo.jpeg"


export const DivContainer = styled.div`
    margin-top:100px;
    //background-color:Red;
    padding:40px;
    display:flex;
    justify-content:space-between ;
    @media (max-width:600px){
        background-color:red;
        width:100%;
        display:block;

    }
`;

export const DivInformation = styled.div`
    padding:40px;
    width:700px;
    font-size:20px;
    @media (max-width:600px){
        background-color:violet;
        width:400px;
    }
`;

export const Carrusel = styled.div`
    //background-color:violet;
    display:flex;
    flex-direction:column;
    padding:10px;
    @media (max-width:600px){
        background-color:blue;
        display:flex;
        flex-direction:row;
    }
`;

export const Image = styled.img`
    width:200px;
    padding-bottom: 10px;
    @media (max-width:600px){
        width:500px;
    }

`
export const BGImage = styled.div`
    background: rgb(0,0,0);
    background: url(${fondo});
    background-repeat: no-repeat;
    width:900px;
    //background-size: contain;

`;

// export const imgCarrusel= styled.img`
    
// `

export const BGgradient = styled.div`
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 16%, rgba(235,232,232,0) 98%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:600px;
    height:700px;
`;