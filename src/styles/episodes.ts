import styled from "styled-components"

export const Container = styled.div`
  padding: 3rem 0;

  overflow-y: scroll;
  height: calc(100vh - 12.55rem);
`

export const Content = styled.div`
  width: 40rem;
  margin: 0 auto;
`

export const ThumbnailContainer = styled.div`
  position: relative;

  height: 11rem;
  background-image: url(${props => props.image});
  background-size: cover;
  border-radius: 1rem;
`

export const HomeButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: var(--purple-500);

  border-radius: 0.75rem;
  border: 0;
  font-size: 0;

  position: absolute;
  left: 0;
  top: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
`

export const PlayButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: var(--green-500);

  border-radius: 0.75rem;
  border: 0;
  font-size: 0;

  position: absolute;
  right: 0;
  top: 50%;
  z-index: 5;
  transform: translate(50%, -50%);
`

export const Header = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);
`

export const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`

export const Span = styled.span`
  font-size: 0.875rem;
  margin-right: 2rem;
`

export const Description = styled.div`
  margin-top: 2rem;
  color: var(--gray-800);

  p {
    margin: 1.5rem 0;
  }
`
