import styled from 'styled-components';

export const Container = styled.div`

display: inline-block;

height: 3rem;
border-radius: .8rem;
padding: .8rem 1.6rem;
width: auto;



margin-right: .8rem;
margin-bottom: 4rem;

background-color: ${({theme})=> theme.COLORS.ORANGE};
color: ${({theme})=> theme.COLORS.GARY_P};
font-size: 1.2rem;

`;