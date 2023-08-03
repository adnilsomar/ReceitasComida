import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api'
import {FiArrowLeft} from 'react-icons/fi'
import {TfiTime} from 'react-icons/tfi'
import{RiStarFill, RiStarLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Container, Main, Section, StyledScrollbars } from "./styles"
import { Header } from "../../components/Header"
import { Tags } from "../../components/Tags"
import { Button } from  "../../components/Buttons"
import { Textarea } from "../../components/Textarea"
import avatarPlaceholer from "../../assets/avatar_placeholder.svg"


export function Details(){

  const [data, setData] = useState(null);

  const params = useParams();

  const {user} = useAuth();

  const navigate = useNavigate()

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` :avatarPlaceholer;

  const emptyStar = <RiStarLine/>
  const fullStar = <RiStarFill/>

  function handleRating() {
    switch (data.rating) {
      case 0:
        return (
          <>
            {emptyStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
          </>
        );
      case 1:
        return (
          <>
            {fullStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
          </>
        );
      case 2:
        return (
          <>
            {fullStar}
            {fullStar}
            {emptyStar}
            {emptyStar}
            {emptyStar}
          </>
        );
      case 3:
        return (
          <>
            {fullStar}
            {fullStar}
            {fullStar}
            {emptyStar}
            {emptyStar}
          </>
        );
      case 4:
        return (
          <>
            {fullStar}
            {fullStar}
            {fullStar}
            {fullStar}
            {emptyStar}
          </>
        );
      case 5:
        return (
          <>
            {fullStar}
            {fullStar}
            {fullStar}
            {fullStar}
            {fullStar}
          </>
        );
      default:
        return null;
    }
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate(-1);
    }
  }

useEffect(()=>{
  async function fetchNote(){
    const response = await api.get(`/notes/${params.id}`)
    setData(response.data)
  }

  fetchNote()

}, [])


  return(
    <Container>

      <Header/>

      {

        data &&

      <Main>

        <StyledScrollbars>
       

        <Link to="/"><FiArrowLeft/>Voltar</Link>

        <Section>

          <h1>
            <span>
              
              {data.title}  

            <span>
            {
                handleRating()
            }
            </span>

            </span>
          </h1>

          <div>

          <div>

          <img 
          src={avatarUrl}
          alt="Foto do usuario"
          />

          <p>Por {user.name} </p>

          </div>

          <p> 
            <span>
              <span><TfiTime/> </span> 
              {data.create_at}
            </span> 
          </p>

          </div>

        </Section>

        {
          data.tags &&

            data.tags.map(tag =>
              
              <Tags 
              key = {String(tag.id)}
              title={tag.name}
              
              />
              )
        }

      
      <Textarea defaultValue = {data.description} />
    
      </StyledScrollbars>

      <div className='button'>

      <Button className="delete"
       title="Excluir filme"
       onClick = {handleRemove}
       />

      </div>

      </Main>

      }


    </Container>

  )
}