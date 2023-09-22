import { Container, Profile } from "./styles";

export function Header() {

  return(
    <Container>
      <Profile>
        <img src="https://github.com/caiobaldur.png" alt="Foto do usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Caio Balduino</strong>
        </div>
      </Profile>
    </Container>
  )
}