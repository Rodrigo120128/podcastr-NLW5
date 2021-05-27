import GlobalStyle from "../styles/global"
import { Container, Main } from "../styles/app"

import Header from "../components/Header"
import Player from "../components/Player"
import { PlayerProvider } from "../contexts/PlayerContext"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <PlayerProvider>
        <Container>
          <Main>
            <Header />
            <Component {...pageProps} />
          </Main>
          <Player />
        </Container>
      </PlayerProvider>
    </>
  )
}

export default App
