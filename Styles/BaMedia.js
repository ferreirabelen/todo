import styled from "styled-components";


export const DIV = styled.div`
    display:flex;
    justify-content:center;
    div{
        background-color:blue;
        width:350px;
        height:350px;
        padding:5px;
        img{
            width:200px;
            height:200px;
            margin-left:80px;
        }
        p,h3{
            text-align:center;
        }
    }
`
export const DivContainer = styled.div`
    background-color:red;
    display:flex;
    height:100vh;

`

export const DIVSLIDER = styled.div`
    width:1300px;
    height:800px;
    //background-color:blue;
    padding:40px;
`

export const Information = styled.div`
   font-size:20px;
   width:600px;
   background-color:yellow;
`