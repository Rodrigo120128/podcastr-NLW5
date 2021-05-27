import { useEffect, useRef, useState } from "react"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

import { usePlayer } from "../../contexts/PlayerContext"
import convertSecToTimeString from "../../utils/convertSecToTimeString"

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
    isLooping,
    togglePlay,
    toggleLoop,
    toggleShuffling,
    setPlayingState,
    playPrevious,
    playNext,
    clearPlayingState,
  } = usePlayer()

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

  const [progress, setProgress] = useState(0)

  const setupProgressListener = () => {
    audioRef.current.currentTime = 0

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }

  const handleSeek = (amount: number) => {
    audioRef.current.currentTime = amount
    setProgress(amount)
  }

  const handleEpisodeEnded = () => {
    if (currentEpisodeIndex < episodeList.length - 1) {
      playNext()
    } else {
      clearPlayingState()
    }
  }

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
          loop={isLooping}
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
          onLoadedMetadata={setupProgressListener}
          onEnded={handleEpisodeEnded}
        />
      )}

      <Footer>
        <TimeBar>
          <Span>{convertSecToTimeString(progress)}</Span>
          {episode ? (
            <Slider
              max={episode.duration}
              value={progress}
              onChange={handleSeek}
              trackStyle={{ backgroundColor: "#04d361" }}
              railStyle={{ backgroundColor: "#9f75ff" }}
              handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
            />
          ) : (
            <ProgressBar />
          )}
          <Span>{episode ? episode.durationAsString : "00:00:00"}</Span>
        </TimeBar>

        <Buttons>
          <Button disabled={!episode || episodeList.length == 1}>
            <img
              onClick={toggleShuffling}
              width={"70%"}
              src="/shuffle.svg"
              alt="Embaralhar"
            />
          </Button>
          <Button disabled={!episode}>
            <img
              onClick={playPrevious}
              width={"70%"}
              src="/play-previous.svg"
              alt="Tocar anterior"
            />
          </Button>
          <PlayButton onClick={togglePlay} disabled={!episode}>
            {isPlaying ? (
              <img src="/pause.svg" alt="Tocar" />
            ) : (
              <img src="/play.svg" alt="Tocar" />
            )}
          </PlayButton>
          <Button disabled={!episode}>
            <img
              onClick={playNext}
              width={"70%"}
              src="/play-next.svg"
              alt="Tocar próximo"
            />
          </Button>
          <Button disabled={!episode}>
            <img
              onClick={toggleLoop}
              width={"70%"}
              src="/repeat.svg"
              alt="Repetir"
            />
          </Button>
        </Buttons>
      </Footer>
    </Container>
  )
}

export default Player
