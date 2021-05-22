import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--purple-500);
  color: var(--white);

  width: 18.5rem;
  height: calc(100vh - 6rem);
  padding: 3rem 4rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  gap: 1rem;
`

export const Strong = styled.span`
  font-family: Lexend, sans-serif;
  font-weight: 600;
`

export const EmptyPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 10rem;
  padding: 4rem;

  border-radius: 1.5rem;
  border: 1.5px dashed var(--purple-300);

  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  text-align: center;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-self: stretch;
`
export const TimeBar = styled.div`
  display: flex;
  align-items: center;

  gap: 0.8rem;
`
export const Span = styled.span`
  color: var(--white);
  font-size: 0.875rem;
`
export const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 2px;

  background: var(--purple-300);
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2.5rem;

  gap: 1.5rem;
`
export const Button = styled.button`
  border: 0;
  font-size: 0;
  background: transparent;
`

export const PlayButton = styled.button`
  width: 4rem;
  height: 4rem;

  background: var(--purple-400);

  border: 0;
  border-radius: 1rem;
`
