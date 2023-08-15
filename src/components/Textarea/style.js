import styled from 'styled-components';

export const Container = styled.textarea`
width: 100%;
height: 33.6rem;

padding: 1.9rem 2.4rem;

text-align: justify;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
color: ${({theme}) => theme.COLORS.BEIGE};

border-radius: 1.6rem;
border: none;
resize: none;

&::placeholder{
  color: ${({theme}) => theme.COLORS.GRAY_100};;
}


&::-webkit-scrollbar {
  width: 8px;
}



`;
