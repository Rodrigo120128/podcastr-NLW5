import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  align-items: center;

  background-color: var(--white);
  border-bottom: 1px solid var(--gray-100);

  height: 2.5rem;
  padding: 2rem 4rem;
`

export const Slogan = styled.p`
  margin-left: 2rem;
  padding: 0.25rem 0 0.25rem 2rem;
  border-left: 1px solid var(--gray-100);
`

export const Today = styled.span`
  margin-left: auto;
  text-transform: capitalize;
`
