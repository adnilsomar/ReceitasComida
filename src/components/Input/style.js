import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items:center;

  background-image: linear-gradient(to right, #F0E68C, #fc9729, #fffb4f);
  
  color: ${({theme})=> theme.COLORS.BROW};


  border-radius: 1rem;

  >input{
    height: 5.6rem;
    width: 100%;

    
    padding: 1.9rem 2.4rem;
    color: ${({theme})=> theme.COLORS.BROW};
    background: transparent;
    border: 0;

    &::placeholder{
      color: ${({theme})=> theme.COLORS.BACK};
    }
  
    }

    >svg{
      margin-left: 1.6rem;
      color: ${({theme})=> theme.COLORS.BACK};

    }

`;