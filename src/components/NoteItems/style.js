import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparet" : theme.COLORS.BACK};
  color: ${({theme}) => theme.COLORS.BEIGE};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.BEIGE}`: "none"};

  border-radius:1rem;
  padding-right:1.6rem;
  
  > button{
    border: none;
    background: none;
  }

  .button-delete{
    color: ${({theme}) => theme.COLORS.ORANGE_100};
  }
  .button-add{
    color: ${({theme}) => theme.COLORS.ORANGE_100};
  }
  >input{

    padding:12px;

    color: ${({theme}) => theme.COLORS.BEIGE};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }

  }


`;