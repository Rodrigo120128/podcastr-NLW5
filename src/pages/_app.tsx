import GlobalStyle from "../styles/global"
import { Container, Main } from "../styles/app"
import Header from "../components/Header"
import Player from "../components/Player"

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Container>
      <Main>
        <Header />
        <Component {...pageProps} />
      </Main>
      <Player />
    </Container>
  </>
)

export default App
