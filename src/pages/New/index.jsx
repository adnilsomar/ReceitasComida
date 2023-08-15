import { useState } from "react";
import { Container, Main, StyledScrollbars} from "./style";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {FiArrowLeft} from 'react-icons/fi';
import { Link } from "react-router-dom";
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import { NoteItems } from "../../components/NoteItems";
import { Button } from "../../components/Buttons";



export function New(){

  const [title, setTitle] = useState("")
  const [rating, setRating]= useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
 }

 function handleRemoveTag(deleted){
  setTags(prevState => prevState.filter(tag => tag !== deleted));
}

async function handleNewNote(){
  if (!title){
    return alert ('Digite o título da película')
 }

  if(newTag){
    return alert("Você deixou uma tag no campo no campo para adicionar, mas não clicou en adicionar, clique para adiconar ou deixe o campo vazio")
 }

 if(!rating){
  return alert('Por favor, de sua avaliação (de 0 a 5) para o filme')
 }

  await api.post("/notes", {
     title,
     description,
     rating,
     tags
     
  });

  alert("Nota creada com sucesso");
  navigate(-1)

}

function handleCancel(){
  const confirm = window.confirm("Deseja realmente cancelar");

    if(confirm){
      navigate(-1);
    }
}

  return(

    <Container>
      <Header/>

      <StyledScrollbars>
      <Main>


      <Link to="/"><FiArrowLeft/>Voltar</Link>
        <h1>Nova receita</h1>

        <div className="input">

        <Input 
        placeholder="Nome do prato" 
        onChange = {e => setTitle(e.target.value)}
        />

        <Input 
        placeholder="Sua nota (de 0 a 5)"
        type = "number" min = "0" max="5" step ="1"
        onChange = {e => setRating(e.target.value)} 
        />
        </div>

        <Textarea 
        placeholder="Observações"
        onChange = {e => setDescription(e.target.value)}
        />

        <h2>Marcadores</h2>

        <div className='tags'>

          {
            tags.map((tag, index)=>(

              <NoteItems 
              key={String(index)}
              value= {tag}
              onClick={()=> handleRemoveTag(tag)}/>
            ))
          }


           <NoteItems 
           isNew 
           placeholder="Novo marcador"
           onChange = {e => setNewTag(e.target.value)}
           value = {newTag}
           onClick={handleAddTag}
           />
            
        </div>

        <div className="button">
        <Button className="delete" title="Cancelar" onClick={handleCancel}/>
        <Button title="Salvar alterações" onClick = {handleNewNote}/>
        </div>

      </Main>
      </StyledScrollbars>

    </Container>

  )


}


