import { Container, Slogan, Today } from "./styles"
import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"

const Header = () => {
  const currentDate = format(new Date(), "eeeeee, d MMMM", {
    locale: ptBR,
  })

  return (
    <Container>
      <img src="/logo.svg" alt="Podcastr" />
      <Slogan>O melhor para você ouvir, sempre</Slogan>
      <Today>{currentDate}</Today>
    </Container>
  )
}

export default Header
