import styled from 'styled-components';

export const Container = styled.header`
grid-area: header;
height: 11rem;
width: 100%;



display: flex;
align-items: center;
justify-content: space-between;
gap: 6.4rem;


padding: 3rem 13rem;
border-bottom: 1px solid ${({theme})=> theme.COLORS.GRAY_200};

>h1{
  color:${({theme})=> theme.COLORS.ORANGE_200} ;
  font-size: 2.4rem;
  width: 45rem;
 
}
`;

export const Profile = styled.div`
display: flex;
align-items: center;
gap: .9rem;
font-size: 1.4rem;

> div{
  display: flex;
  flex-direction: column;
  align-items: end;
  
}
> div strong {
  white-space: nowrap;
  color:${({theme})=> theme.COLORS.BEIGE}

}

> .image img{
  width: 6.4rem;
  height: 6.4rem;

  border-radius: 50%;
}

>div a{
  color:  ${({theme})=> theme.COLORS.ORANGE};
}

`;