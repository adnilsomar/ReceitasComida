import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;

grid-template-rows: 11rem auto;
grid-template-areas: "header" "content";

`;

export const Main = styled.div`


margin-top: 4rem;

overflow-y: auto;


grid-area: content;
padding: 0 13rem 4rem;

.button{
  display: flex;
  gap:.8rem;
}

.button .delete{
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_900} ;
  color: ${({theme})=> theme.COLORS.PINK} 
}

>a{
  display: flex;
  align-items: center;
  gap:.8rem;
  color: ${({theme})=> theme.COLORS.PINK};
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
}

`;

export const Section = styled.div`

>h1{
  margin-bottom: 2.4rem;

}

h1 span{
 display: flex;
 align-items: center;
 gap: 1.9rem;
 ;


}
h1 span span{
  color: ${({theme})=> theme.COLORS.PINK};
  font-size: 1.8rem ;
  gap: .8rem;

 
}
>div{
  display: flex;
  align-items: center;
  gap: .8rem;
  margin-bottom: 4rem;
}
>div div{
  display: flex;
  gap:.8rem;
  align-items: center;
}
>div div img{
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
}
div p span{
  display: flex;
  align-items: center;
  gap: .8rem;
}
div p span span{
  color: ${({theme})=> theme.COLORS.PINK};
}
`;
