import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Container, Form, Background } from './style';
import { Input } from '../../components/Input'
import { Button} from '../../components/Buttons'

export function SignIn(){
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password})
  }


  return(
    <Container>
      
      <Form>

        <div>

        <h1>Receitas de Comida</h1>
        <p>Aplicação para fazer anotações de suas receitas preferidas</p>

        </div>


        <h2>Faça seu login</h2>

        <div className='input'>

        <Input
          placeholder="E-mail"
          type = "email"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
          />

        </div>

        <div className='input'>

        <Input
        placeholder="Senha"
        type = "Password"
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />

        </div>


        <Button title="Entrar" onClick={handleSignIn}/>

        <div>

        <Link to="/register">Criar Cuenta</Link>

        </div>


      </Form>

      <Background/>

   
    </Container>
  )
}