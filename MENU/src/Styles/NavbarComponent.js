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
    li{
        display: flex;
        justify-content: space-evenly;
    }
    
`;
export const Ul = styled.ul`
    display: flex;
    list-style: none;
    @media (max-width:600px){
        width:50%;
        height:90vh;
        position:absolute;
        top:65px;
        padding-top:10px;
        border-radius:20px 0 0 20px;
        right:${({click}) => click ? 0 : "-100%"};
        flex-direction:column;
        align-items:end;
        transition: 0.5s all ease-in;
        background-color: rgba(50, 168, 130, .9);
}
`

export const Bodydiv = styled.div`
margin-top:200px;
background-color:violet;
width:1200px;
height:100vh;

`


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

export const Logo = styled.div`
    padding:20px;
`;

export const BottonHamburguer = styled.div`
    display:none;
    margin-right:20px;
    cursor: pointer;
    @media (max-width:600px){
        display:flex;
        justify-content: end;
        align-items: center;
        margin-left:220px;

    }
`;

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
    @media(max-width:600px){
        margin-bottom:20px;
        cursor: pointer;
        margin-top:10px;
        
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

export const Content = styled.div`

height:100%;
`;