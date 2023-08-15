import styled from 'styled-components';
import Scrollbars from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

export const Container = styled.div`


width: 100%;
height:100vh;

display: grid;
grid-template-rows: 11rem auto;
grid-template-areas: "header" "content";

`;

export const Main = styled.div`

grid-area: content;

padding: 4rem 13rem;

overflow-y: auto;

>a{
  display: flex;
  align-items: center;
  gap:.8rem;
  color: ${({theme})=> theme.COLORS.ORANGE};
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
}

>h1{
  font-size: 2.8rem;
  margin: 2.4rem 0 4rem;
  color: ${({theme})=> theme.COLORS.BEIGE};
}
h2{
  margin: 4rem 0 2.4rem;
  font-size: 2rem;
  color: ${({theme})=> theme.COLORS.BEIGE};
   
  }

>.input{
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
}
>.tags{
 
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  gap: 2.4rem;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_700} ;
  border-radius: 1rem;
  padding: 1.6rem;
  
}
.button{
  display: flex;
  gap: 4rem;
}
.button .delete{
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900} ;
  color: ${({theme})=> theme.COLORS.BACK} 
}
`;

export const StyledScrollbars = styled(Scrollbars)`

.ps__thumb-y {
    background-color: ${({ theme }) => theme.COLORS.ORANGE} !important;
    border-radius: 5px;
    margin-right: 11rem;
    max-height: 10rem;
    margin-top: 6rem;
  }

  .ps__rail-y {
    background-color: transparent !important;
  }
  `;
