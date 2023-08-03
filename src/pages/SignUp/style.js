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
  color: ${({theme})=> theme.COLORS.PINK};
  font-size: 4.8rem;
 
}
> p{
  color: ${({theme})=> theme.COLORS.GRAY_P};
  font-size: 1.4rem;

  margin-bottom: 3rem;
}
> h2{
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: 2.4rem;

  margin-bottom: 3.2rem;
}

> a{
  display: flex;
  align-items: center;

  padding: 0 7rem;
 
 
  gap: .8rem;

  margin-top:4.2rem;
  color: ${({theme})=> theme.COLORS.PINK};
}

>.input{
  margin-bottom: 1.6rem;
}


`;

export const Background = styled.div`
flex: 1;
opacity: 0.3;
background: url(${background}) no-repeat center center;
background-size:cover;

`;

