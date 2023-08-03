import styled from 'styled-components';

import Scrollbars from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';



export const Container = styled.div`

width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 11rem 11.3rem auto;
grid-template-areas: 'header' 'buttonnew' 'content';

`;

export const Content = styled.div`
grid-area: content;

margin-top: 3.7rem;


padding: 0 13rem;
overflow-y: auto;


`;

export const ButtonNew = styled.div`
grid-area: buttonnew;
display: flex;
justify-content:space-between;
align-items: center;
text-align: center;


margin-top: 5rem;

padding: 0 13rem;

>h1{
  font-size: 3.2rem;
  white-space: nowrap;
}
div{
  width: 20.7rem;
  height: 5.6rem;
  padding: 1.6rem ;
  margin-top: 1.6rem;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({theme})=>theme.COLORS.PINK};
  color: ${({theme})=>theme.COLORS.GRAY_400};
  font-size: 1.6rem;
 
  border-radius: 1rem;

.addMovie{

  color: ${({theme})=>theme.COLORS.GRAY_400};
}

}
div:hover{
  cursor: pointer;
  opacity: 0.9;
}

`;

export const StyledScrollbars = styled(Scrollbars)`

  .ps__thumb-y {
      background-color: ${({ theme }) => theme.COLORS.PINK} !important;
      border-radius: 5px;
      
      
      
      
    }
  
    .ps__rail-y {
      background-color: transparent !important;
    }

  `;

export const ScrollContent = styled.div`
margin-right: 2rem ;
`;
