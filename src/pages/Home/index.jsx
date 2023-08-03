import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import {Container, Content, ButtonNew, StyledScrollbars, ScrollContent } from './style';
import {FiPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import {Header} from '../../components/Header'

import {Sumary} from '../../components/Sumary'


export function Home(){
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState("");

  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
    
  }, [search]);

  return(
    <Container>

      <Header setSearch={setSearch}/>

      <ButtonNew>
        <h1>Meus Filmes</h1>

        <div >
        <FiPlus/>
        
        <Link className="addMovie" to="/new"> Adicionar filme</Link>
        </div>

      </ButtonNew>

      <Content>

      <StyledScrollbars>
        <ScrollContent>

        {
          notes.map(note =>(
            <Sumary 
              key ={String(note.id)}
              data= {note}
              onClick={() => handleDetails(note.id)}
            />
          ))
        }
    
        </ScrollContent>
      </StyledScrollbars>
     
      </Content>


    </Container>


  )
}


