const Home = ({ episodes }) => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3333/episodes")
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

export default Home
