import styled from 'styled-components';

export const Container = styled.div`

display: inline-block;

height: 3rem;
border-radius: .8rem;
padding: .8rem 1.6rem;
width: auto;
margin-right: .8rem;
margin-bottom: 4rem;

background-color: ${({theme})=> theme.COLORS.BACKGROUND_700};
color: ${({theme})=> theme.COLORS.ORANGE};
font-size: 1.2rem;

`;