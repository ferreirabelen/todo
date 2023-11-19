import styled from 'styled-components'


export const Title = styled.h1`
    text-align:center;
    display:block;
    padding-top:20px;
    background-color:#8CCCF4;
`;
export const Container = styled.div`
    background-color:#8CCCF4;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:100vh;
`;
export const DivForm = styled.div`
    background-color:#C4A4C4;
    height:700px;
    width:500px;
    border-radius: 20px;
    padding:10px;
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.2);
    text-align:center;
    form{
        input{
            padding:6px;
        }
    }
`;
export const Button = styled.button`
    margin-top:20px;
`;

export const DivRsp = styled.div`
    background-color:#C4B4E4;
    height:700px;
    width:500px;
    border-radius:20px;
    padding:10px;
    box-shadow: 2px 2px 2px 4px rgba(0, 0, 0, 0.2);
    text-align:center;
`;