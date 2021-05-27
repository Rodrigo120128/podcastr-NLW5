import styled from "styled-components"

export const Container = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.55rem);

  overflow-y: scroll;
`

export const LatestEpisodes = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const Tag = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

export const CardContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Card = styled.div`
  display: flex;

  background: var(--white);
  padding: 1.25rem 1.25rem 1rem;

  border: 1px solid var(--gray-100);
  border-radius: 1.5rem;
`

export const InfoEpisode = styled.div`
  width: 14rem;
  margin-left: 1rem;
`

export const Title = styled.a`
  font-family: Lexend, sans-serif;
  font-weight: 600;
  font-size: 0.9rem;

  color: var(--gray-800);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const InfoFooter = styled.div`
  display: flex;
  flex-direction: column;
`

export const DurationAndButton = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PlayButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  font-size: 0;
  border: 1px solid var(--gray-100);
  border-radius: 0.675rem;
  background: var(--white);
`

export const Span = styled.span`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

export const Thumb = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius};
  object-fit: cover;
`

export const AllEpisodes = styled.div``

export const ColumnName = styled.th`
  text-align: left;
  font: 500 0.75rem Lexend, sans-serif;
  color: var(--gray-200);
  border-bottom: 1px solid var(--gray-100);
  padding: 0.75rem 1.35rem;
`

export const Field = styled.td`
  padding: 0.75rem 1rem;
  max-width: 25rem;
  border-bottom: 1px solid var(--gray-100);
`
export const Episode = styled.a`
  font: 600 0.8rem Lexend, sans-serif;
  color: var(--gray-8--);
  text-decoration: none;

  &:hover: {
    text-decoration: underline;
  }
`

export const InfoField = styled.span`
  font-size: 0.75rem;
`
