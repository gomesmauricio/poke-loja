import { Container, Content } from './styles';
import logoImg from '../../assets/logo2.png';

export function Header() {
  
  return (
    <Container>
      <Content>
        <a href="https://lojapokemon.herokuapp.com/"><img src={logoImg} alt="PokéStore" /></a>
      </Content>
    </Container>
  )
}