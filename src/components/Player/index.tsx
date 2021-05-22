import {
  Container,
  Header,
  Strong,
  EmptyPlayer,
  Footer,
  TimeBar,
  ProgressBar,
  Span,
  Buttons,
  Button,
  PlayButton,
} from "./styles"

const Player = () => {
  return (
    <Container>
      <Header>
        <img src="playing.svg" alt="Tocando agora" />
        <Strong>Tocando agora</Strong>
      </Header>

      <EmptyPlayer>
        <Strong>Selecione um podcast para ouvir</Strong>
      </EmptyPlayer>

      <Footer>
        <TimeBar>
          <Span>00:00</Span>
          <ProgressBar />
          <Span>00:00</Span>
        </TimeBar>

        <Buttons>
          <Button>
            <img src="shuffle.svg" alt="Embaralhar" />
          </Button>
          <Button>
            <img src="play-previous.svg" alt="Tocar anterior" />
          </Button>
          <PlayButton>
            <img src="play.svg" alt="Tocar" />
          </PlayButton>
          <Button>
            <img src="play-next.svg" alt="Tocar próximo" />
          </Button>
          <Button>
            <img src="repeat.svg" alt="Repetir" />
          </Button>
        </Buttons>
      </Footer>
    </Container>
  )
}

export default Player
