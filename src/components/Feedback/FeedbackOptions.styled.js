import styled from 'styled-components';

export const BtnList = styled.ul`
    display:flex;
    gap:10px;
    padding:10px;
    list-style: none;
    justify-content:center;

 `

 export const Btn = styled.button`
    cursor: 'pointer';
    border: 1px solid green;
    border-radius: 5px; 
    padding: 10px
    width:80px;
    background-color:white;
    margin: 0 auto;
        &:focus,
        &:hover {
            background-color: lightgreen;
            outline: transparent;
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
            1px 4px 6px rgba(0, 0, 0, 0.16);
            transform: scale(1.1);
}`
 


  
