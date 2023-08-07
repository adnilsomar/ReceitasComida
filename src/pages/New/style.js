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
  color: ${({theme})=> theme.COLORS.PINK};
  font-size: 1.6rem;
  margin-bottom: 2.4rem;


}

>h1{
  font: 3.6rem;
  margin: 2.4rem 0 4rem;
}
h2{
    margin: 4rem 0 2.4rem;
    font-size: 2rem;
   
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
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900} ;
  border-radius: 1rem;
  padding: 1.6rem;
  
}
.button{
  display: flex;
  gap: 4rem;
}
.button .delete{
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900} ;
  color: ${({theme})=> theme.COLORS.PINK} 
}
`;

export const StyledScrollbars = styled(Scrollbars)`

.ps__thumb-y {
    background-color: ${({ theme }) => theme.COLORS.PINK} !important;
    border-radius: 5px;
    margin-right: 11rem;
    max-height: 10rem;
    margin-top: 6rem;
    
  }

  .ps__rail-y {
    background-color: transparent !important;
  }
  `;
