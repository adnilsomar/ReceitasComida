import styled from 'styled-components';
import { Input } from '../../components/Input'



export const Container = styled.div`

display: flex;
flex-direction: column;

height: 100vh;
align-items: center;
justify-content: center;

>div{
  width: 34rem;
}

>div .input{
  margin-bottom: .8rem;
}

>div .input:nth-child(3){
  margin-bottom: 1.6rem;
}
>div .input:nth-child(5){
  margin-bottom: 1.6rem;
}

`;

export const Header = styled.header`

position: fixed;
top: 0;
height: 14.4rem;
width: 100%;
display: flex;

background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};

>a {
  display: flex;
  align-items: center;
  gap:.8rem;

  

  margin-left: clamp(1rem, 1rem + 5vw, 14.4rem);
  
  color:${({theme})=>theme.COLORS.PINK};

}
`;

export const ProfilePhoto = styled.div`

display: flex;
justify-content: center;


> img{
  width: 18.6rem;
  height: 18.6rem;

  border-radius: 50%;

  margin-bottom: 6.4rem;
}

>label{
  width: 4.8rem;
  height: 4.8rem;

  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  bottom: -14rem;
  right: 5rem;

  cursor: pointer;

> input {
      display: none;
    }
}

`;