import styled from "styled-components";

export const Nav = styled.nav`
    background-color:red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0f9ea8;
    position:fixed;
    top:0;
    width: 100%;
    height:80px;
    a{
        text-decoration: none;
        color:black;

    }
`;

export const SectionLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SectionRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const BottonHamburguer = styled.div`
    display:none;
    @media (max-width:600px){
        cursor:pointer;
        display:flex;
        justify-content: end;
        align-items: center;
        margin-left:220px;
    }
`;
export const Ul=styled.ul`
    display: flex;
    list-style: none;
    li{
        display: flex;
        justify-content: space-evenly;
    }
    @media (max-width:600px){
        display:flex;
        flex-direction:column;

    }
`
export const ButtonNav = styled.button`
    padding: 3px; 
    margin-right: 20px;
    width: 140px;
    border-radius: 4px;
    

    @media (max-width:912px){
        font-size: 12px;
        height: 30px;
        border-radius: 4px;
    }

    @media (max-width:600px){ 
        position:absolute;
        top:120px;
        right:70px;
        cursor: pointer;
        margin-bottom:10px;

    }
`;

export const Slogan =  styled.span`
    @media (max-width:912px){
        display: none;
    }

    @media (max-width:600px){
        display: none;
    }
`;





export const Perfil = styled.div`
    border-radius:20px;
    color:white; 
    //padding:20px;
    margin-right:50px;
    cursor: pointer;

`
export const DrowdownMenu = styled.div`
    position:absolute;
    top:82px;
    right:20px;
    border-radius:10px;
    padding: 10px 20px;
    width:200px;
    background-color:#DFDEDE

`
export const UlDropDown = styled.ul`
    display:flex;
    flex-direction:column;
`

export const LidropDown = styled.li`
    background-color:#9F9D9D;
    padding:10px 0;
    border-top: 1px solid;
    cursor: pointer;
    &:hover {
        background-color: #ccc;
}
`




