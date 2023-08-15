import styled from 'styled-components';

export const Container =  styled.div`

width: 100%;
padding: 0 4rem;


margin-bottom:3.2rem;

border-radius: 1.6rem;

background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};

>span{
 
  color: ${({theme})=> theme.COLORS.ORANGE_100};

}

div{
  background-color: ${({theme})=> theme.COLORS.ORANGE_200};
  color: ${({theme})=> theme.COLORS.BACK};
  font-weight: 700;
  
}

>.titleSumary{
  padding-top: 4rem;
  background-color: transparent;
}



>.titleSumary h1{

font-size: 2.4rem;
color: ${({theme})=> theme.COLORS.BEIGE};
margin-bottom: .8rem;

}

>textarea{
  width: 100%;
  font-size: 1.2rem;
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
  color: ${({theme})=> theme.COLORS.BEIGE};
  text-align: justify;

  margin-top: 1.5rem;
  margin-bottom: .8rem;
  border: none;
  overflow: hidden;
  resize: none;
  pointer-events:none;
}

`;

