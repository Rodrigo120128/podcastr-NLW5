import { GetStaticProps } from "next"
import Link from "next/link"
import Head from "next/head"
import { format, parseISO } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import api from "../services/api"
import convertSecToTimeString from "../utils/convertSecToTimeString"
import { usePlayer } from "../contexts/PlayerContext"

import {
  Container,
  LatestEpisodes,
  Header,
  CardContainer,
  Card,
  InfoEpisode,
  Title,
  InfoFooter,
  Span,
  Tag,
  Thumb,
  DurationAndButton,
  AllEpisodes,
  ColumnName,
  Field,
  InfoField,
  Episode,
  PlayButton,
} from "../styles/home"

type Episodes = {
  id: string
  title: string
  members: string
  published_at: string
  publishedAt: string
  thumbnail: string
  duration: number
  durationAsString: string
  url: string
}

type HomeProps = {
  latestEpisodes: Array<Episodes>
  allEpisodes: Array<Episodes>
}

const Home = ({ latestEpisodes, allEpisodes }: HomeProps) => {
  const { playList } = usePlayer()

  const episodeList = [...latestEpisodes, ...allEpisodes]

  return (
    <Container>
      <Head>
        <title>Home | Podcastr</title>
      </Head>
      <LatestEpisodes>
        <Header>
          <Tag>Últimos lançamentos</Tag>
        </Header>
        <CardContainer>
          {latestEpisodes.map((episode, index) => (
            <Card key={episode.id}>
              <Thumb
                width="6rem"
                height="6rem"
                radius="1rem"
                src={episode.thumbnail}
                alt={episode.title}
              />
              <InfoEpisode>
                <Link href={`/episodes/${episode.id}`}>
                  <Title>{episode.title}</Title>
                </Link>
                <InfoFooter>
                  <Span>{episode.members}</Span>
                  <DurationAndButton>
                    <Span>{episode.durationAsString}</Span>
                    <PlayButton onClick={() => playList(episodeList, index)}>
                      <img src="play-green.svg" alt="Tocar episódio" />
                    </PlayButton>
                  </DurationAndButton>
                </InfoFooter>
              </InfoEpisode>
            </Card>
          ))}
        </CardContainer>
      </LatestEpisodes>

      <AllEpisodes>
        <Tag>Todos os episódios</Tag>
        <table cellSpacing={0}>
          <thead>
            <tr>
              <ColumnName>Podcast</ColumnName>
              <ColumnName />
              <ColumnName>Integrantes</ColumnName>
              <ColumnName>Data</ColumnName>
              <ColumnName>Duração</ColumnName>
              <ColumnName />
            </tr>
          </thead>
          <tbody>
            {allEpisodes.map((episode, index) => (
              <tr key={episode.id}>
                <Field>
                  <Thumb
                    src={episode.thumbnail}
                    width="2.5rem"
                    height="2.5rem"
                    radius="0.5rem"
                    alt={episode.title}
                  />
                </Field>
                <Field>
                  <Link href={`/episodes/${episode.id}`}>
                    <Episode>{episode.title}</Episode>
                  </Link>
                </Field>
                <Field>
                  <InfoField>{episode.members}</InfoField>
                </Field>
                <Field>
                  <InfoField>{episode.publishedAt}</InfoField>
                </Field>
                <Field>
                  <InfoField>{episode.durationAsString}</InfoField>
                </Field>
                <Field>
                  <PlayButton
                    onClick={() =>
                      playList(episodeList, index + latestEpisodes.length)
                    }
                  >
                    <img src="play-green.svg" alt="Tocar episódio" />
                  </PlayButton>
                </Field>
              </tr>
            ))}
          </tbody>
        </table>
      </AllEpisodes>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 12,
      _sort: "published_at",
      _order: "desc",
    },
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
        locale: ptBR,
      }),
      thumbnail: episode.thumbnail,
      duration: episode.file.duration,
      durationAsString: convertSecToTimeString(episode.file.duration),
      url: episode.file.url,
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }
}

export default Home
