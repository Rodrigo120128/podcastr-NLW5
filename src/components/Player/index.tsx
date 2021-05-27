import { useContext, useEffect, useRef } from "react"
import { PlayerContext } from "../../contexts/PlayerContext"
import Slider from "rc-slider"

import "rc-slider/assets/index.css"
import {
  Container,
  Header,
  Strong,
  EmptyPlayer,
  CurrentEpisode,
  Title,
  Members,
  Footer,
  TimeBar,
  ProgressBar,
  Span,
  Buttons,
  Button,
  PlayButton,
} from "./styles"

const Player = () => {
  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
  } = useContext(PlayerContext)
  const episode = episodeList[currentEpisodeIndex]

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <Container>
      <Header>
        <img src="/playing.svg" alt="Tocando agora" />
        <Strong>Tocando agora</Strong>
      </Header>

      {episode?.thumbnail ? (
        <>
          <CurrentEpisode imageURL={episode.thumbnail} />
          <Title>{episode.title}</Title>
          <Members>{episode.members}</Members>
        </>
      ) : (
        <>
          <EmptyPlayer>
            <Strong>Selecione um podcast para ouvir</Strong>
          </EmptyPlayer>
          <Title></Title>
          <Members></Members>
        </>
      )}

      {episode && (
        <audio
          ref={audioRef}
          src={episode.url}
          autoPlay
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
        />
      )}

      <Footer>
        <TimeBar>
          <Span>00:00</Span>
          {episode ? (
            <Slider
              trackStyle={{ backgroundColor: "#04d361" }}
              railStyle={{ backgroundColor: "#9f75ff" }}
              handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
            />
          ) : (
            <ProgressBar />
          )}
          <Span>00:00</Span>
        </TimeBar>

        <Buttons>
          <Button disabled={!episode}>
            <img width={"70%"} src="/shuffle.svg" alt="Embaralhar" />
          </Button>
          <Button disabled={!episode}>
            <img width={"70%"} src="/play-previous.svg" alt="Tocar anterior" />
          </Button>
          <PlayButton onClick={togglePlay} disabled={!episode}>
            {isPlaying ? (
              <img src="/pause.svg" alt="Tocar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </PlayButton>
          <Button disabled={!episode}>
            <img width={"70%"} src="/play-next.svg" alt="Tocar próximo" />
          </Button>
          <Button disabled={!episode}>
            <img width={"70%"} src="/repeat.svg" alt="Repetir" />
          </Button>
        </Buttons>
      </Footer>
    </Container>
  )
}

export default Player
