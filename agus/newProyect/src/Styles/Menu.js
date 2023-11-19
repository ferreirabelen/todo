import styled from "styled-components";


export const H1 = styled.h1`
    font-size:40px;
    margin-left:170px;
    margin-top:100px;
    margin-bottom:50px;
`
export const DivContainer= styled.div`
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    
`
export const Div= styled.div`
    padding:5px;
    font-size:18px;
    margin-right:30px;
    margin-bottom:20px;
    width:350px;
    height:370px;
    text-align:center;
    border : solid 1px black;

`
export const DivItem= styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:30px;
    button{
        margin-right:10px;
        margin-left:10px;
        cursor:pointer;
    }
`
export const ButtonCarrito= styled.button`
    background-color:#91D9C5;
    display:block;
    width:300px;
    margin-top:20px;
    margin-left:30px;
    padding:6px;
    border-radius:20px;
    cursor:pointer;

`