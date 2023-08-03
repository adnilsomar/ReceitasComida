import { Link } from "react-router-dom";
import { useAuth } from '../../hooks/auth';
import { Container, Profile} from "./style";
import { Input } from "../Input";
import { api } from "../../services/api";
import avatarPlaceholer from "../../assets/avatar_placeholder.svg"


export function Header({setSearch}){
 

  const {signOut, user} = useAuth();

  const avatarUrl = user.avatar? `${api.defaults.baseURL}/files/${user.avatar}` :avatarPlaceholer;
  
  return(
    <Container>

      <h1>RocketMovies</h1>
      <Input 
      placeholder="Pesquisar pelo titulo"
      onChange = {(e)=> setSearch(e.target.value)}
      />

      <Profile>
        <div>
        <strong>{user.name}</strong> 
        <a onClick={signOut} href="/">Sair</a>
        </div>

        <div className="image">

        <Link to="/profile">
          <img 
        src={avatarUrl}
        alt="Foto do usuario"/>
        
        </Link>

        </div>

       
      
      </Profile>

    </Container>
  )
}