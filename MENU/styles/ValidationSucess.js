import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 500px;
  background-color: #EAF0EE;
  color: #3C4444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p{
    font-size:18px;
  }

  button {
    width: 150px;
    height: 40px;
    margin-top: 20px;
    background-color: #FFA200;
    color: #FFF;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #E67F00;
    }
  }
`;

export const DivText = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

export const EmojiText = styled.span`
  font-size: 40px;
  color: #4CAF50;
  margin-right: 10px;
`;