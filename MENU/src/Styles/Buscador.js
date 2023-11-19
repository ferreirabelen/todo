import styled from "styled-components";
import Calendar from "react-calendar";

export const Form = styled.form`
    display:flex;
    justify-content:center;
    padding: 10px;
`;

export const DivCalendar = styled.div`
width:220px;
position:relative;
`
export const InputSearch = styled.input`
background-color:white;
width:100%;
padding:10px;
`
export const StyledCalendar = styled(Calendar)`
    position: absolute;
    z-index: 1;
    top:40px;
    background-color:#DCE4BC;
    .react-calendar__tile--active {
        background-color:green !important;
    }
    .react-calendar__tile--disabled{
        background-color: red;
        color: white;
        cursor: not-allowed;
    }
`;

export const InputSelect = styled.select`
    padding:10px;
    width:400px;
    border-radius: 25px 0px 0px 25px;
    border: 1px solid #80B918;
    font-weight:bold;
`;

export const ButtonSearch = styled.button`
    background-color: #0f9ea8;
    border-radius: 0px 25px 25px 0px ;
    width:200px;
    color:white;
    border: none;
    background-color:#80B918;
`;
