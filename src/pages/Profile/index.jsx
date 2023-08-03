import { useState } from 'react';
import { Container, ProfilePhoto, Header } from "./style";
import {useAuth} from '../../hooks/auth'
import {FiMail, FiUser, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { api } from '../../services/api';
import avatarPlaceholer from '../../assets/avatar_placeholder.svg';
import { Input } from '../../components/Input'
import {Button} from '../../components/Buttons'

export function Profile(){
  const {user, updateProfile} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` :avatarPlaceholer;
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate(){
    const update = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }
    const userUpdate = Object.assign(user, update)
    await updateProfile({user:userUpdate, avatarFile})
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)


  }

  return(

    <Container>
      

      <Header>
      <Link to="/"> <FiArrowLeft/>Voltar</Link>
      </Header>

      <div>

      <ProfilePhoto>

      <img 
        src={avatar}
        alt="Foto do usuario"
        />

      <label htmlFor="avatar">
      <FiCamera/>

     { <input
      id="avatar"
      type="file"
      onChange={handleChangeAvatar}
      />}


      </label>

      </ProfilePhoto>


      <div className="input">

        <Input
        type = "text"
        icon={FiUser}
        value = {name}
        onChange = {e => setName(e.target.value)}

        />
      </div>

      <div className="input">

      <Input
      type = "email"
      icon={FiMail}
      value = {email}
      onChange = {e => setEmail(e.target.value)}

      />
      </div>

      <div className="input">

      <Input
        placeholder="Senha atual"
        type = "Password"
        icon={FiLock}
        onChange = {e => setPasswordOld(e.target.value)}
        />
       
      </div>

      <div className="input">

      <Input
        placeholder="Nova senha"
        type = "Password"
        icon={FiLock}
        onChange = {e => setPasswordNew(e.target.value)}/> 

      </div>

      <Button title="Salvar" onClick={handleUpdate}/>

      </div>


    </Container>

  )
}