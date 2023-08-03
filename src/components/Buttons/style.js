import styled from 'styled-components'

export const Container = styled.button`
width: 100%;
height: 5.6rem;
padding: 1.6rem ;
margin-top: 1.6rem;

border: none;

/* background-color: ${({theme})=>theme.COLORS.ORANGE_200}; */
background-image: linear-gradient(to bottom, #F0E68C, #fc9729, #fffb4f);
font-size: 1.6rem;
color: ${({theme})=>theme.COLORS.BACK} ;

border-radius: 1rem;

&:disabled{
    opacity: 0.5;
  }

`;