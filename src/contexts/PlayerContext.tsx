import { createContext, useState, ReactNode, useContext } from "react"

type Episode = {
  title: string
  members: string
  thumbnail: string
  duration: number
  durationAsString: string
  url: string
}

type PlayerContextData = {
  episodeList: Array<Episode>
  currentEpisodeIndex: number
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  play: (episode: Episode) => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffling: () => void
  setPlayingState: (state: boolean) => void
  playList: (list: Array<Episode>, index: number) => void
  playNext: () => void
  playPrevious: () => void
  clearPlayingState: () => void
}

type PlayerProviderProps = {
  children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  const play = (episode: Episode) => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }

  const playList = (list: Array<Episode>, index: number) => {
    setEpisodeList(list)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }

  const playNext = () => {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(
        Math.random() * episodeList.length
      )

      setCurrentEpisodeIndex(nextRandomEpisodeIndex)
    } else if (currentEpisodeIndex < episodeList.length - 1) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  const playPrevious = () => {
    if (currentEpisodeIndex > 0) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLoop = () => {
    setIsLooping(!isLooping)
  }

  const toggleShuffling = () => {
    setIsShuffling(!isLooping)
  }

  const setPlayingState = (state: boolean) => {
    setIsPlaying(state)
  }

  const clearPlayingState = () => {
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isShuffling,
        play,
        togglePlay,
        toggleLoop,
        toggleShuffling,
        setPlayingState,
        playList,
        playNext,
        playPrevious,
        clearPlayingState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)
