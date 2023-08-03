import styled from 'styled-components';
import background from '../../assets/background.jpg'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  
`;

export const Form = styled.form`
  

  padding: 0 15rem;
  width: 80rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  

> h1{
  color: ${({theme})=> theme.COLORS.ORANGE_200};
  font-size: 4.8rem;
 
}
> p{
  color: ${({theme})=> theme.COLORS.BEIGE};
  font-size: 1.4rem;

  margin-bottom: 3rem;
}
> h2{
  color: ${({theme})=> theme.COLORS.BEIGE};
  font-size: 2.4rem;

  margin-bottom: 4.8rem;
}

> a{
  display: flex;
  align-items: center;
  margin-top:4.2rem;
  font-weight: 500;
  color: ${({theme})=> theme.COLORS.ORANGE_200};
}

>.input{
  margin-bottom: 1.6rem;
}
@media(max-width:700px){
  padding: 0 4rem;
}
`;

export const Background = styled.div`
flex: 1;
opacity: 0.3;
background: url(${background}) no-repeat center center;
background-size: cover;

`;

