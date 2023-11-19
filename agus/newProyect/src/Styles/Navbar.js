import styled from "styled-components";

export const Nav= styled.div`
    background-color:#91D9C5;
    display:flex;
    justify-content:center;
    
    ul{
        display:flex;
        justify-content:space-between;
        width:900px;
    }
    li{
        font-size:20px;
        text-decoration:none;
        list-style: none;
        cursor:pointer;
    }
    a{
        text-decoration:none;
        color:black;
    }
`