import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Link from "next/link"
import ptBR from "date-fns/locale/pt-BR"
import { format, parseISO } from "date-fns"

import convertSecToTimeString from "../../utils/convertSecToTimeString"
import api from "../../services/api"
import { usePlayer } from "../../contexts/PlayerContext"

import {
  Container,
  ThumbnailContainer,
  HomeButton,
  PlayButton,
  Header,
  Title,
  Span,
  Description,
  Content,
} from "../../styles/episodes"

type EpisodeProps = {
  episode: {
    id: string
    title: string
    members: string
    publishedAt: string
    thumbnail: string
    description: string
    duration: number
    durationAsString: string
    url: string
  }
}

const Episode = ({ episode }: EpisodeProps) => {
  const { play } = usePlayer()

  return (
    <Container>
      <Content>
        <Head>
          <title>{episode.title} | Podcastr</title>
        </Head>
        <ThumbnailContainer image={episode.thumbnail}>
          <Link href="/">
            <HomeButton>
              <img src="/arrow-left.svg" alt="Voltar" />
            </HomeButton>
          </Link>
          <PlayButton onClick={() => play(episode)}>
            <img src="/play.svg" />
          </PlayButton>
        </ThumbnailContainer>

        <Header>
          <Title>{episode.title}</Title>
          <div>
            <Span>{episode.members}</Span>
            <Span>{episode.publishedAt}</Span>
            <Span>{episode.durationAsString}</Span>
          </div>
        </Header>

        <Description
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get("episodes", {
    params: {
      _limit: 2,
      _sort: "published_at",
      _order: "desc",
    },
  })

  const paths = data.map(episode => {
    return {
      params: {
        slug: episode.id,
      },
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { slug } = ctx.params

  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {
    id: data.id,
    title: data.title,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), "d MMM yy", {
      locale: ptBR,
    }),
    thumbnail: data.thumbnail,
    description: data.description,
    duration: data.file.duration,
    durationAsString: convertSecToTimeString(data.file.duration),
    url: data.file.url,
  }

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24,
  }
}

export default Episode
