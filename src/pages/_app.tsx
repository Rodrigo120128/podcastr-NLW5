import GlobalStyle from "../styles/global"
import { Container, Main } from "../styles/app"
import Header from "../components/Header"
import Player from "../components/Player"
import { PlayerContext } from "../contexts/PlayerContext"
import { useState } from "react"

const App = ({ Component, pageProps }) => {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = episode => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const setPlayingState = (state: boolean) => {
    setIsPlaying(state)
  }

  return (
    <>
      <GlobalStyle />
      <PlayerContext.Provider
        value={{
          episodeList,
          currentEpisodeIndex,
          play,
          isPlaying,
          togglePlay,
          setPlayingState,
        }}
      >
        <Container>
          <Main>
            <Header />
            <Component {...pageProps} />
          </Main>
          <Player />
        </Container>
      </PlayerContext.Provider>
    </>
  )
}

export default App
