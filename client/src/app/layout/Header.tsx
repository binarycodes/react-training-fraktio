import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkMode } from './DarkMode'
import { Timer } from './Timer'

export function Header(): JSX.Element {
  const [time, setTime] = useState(0)

  useEffect(() => {
    setTimeout(() => setTime((current) => current + 1), 1000)
  }, [time])

  return (
    <Container>
      <Link to="/">
        <Title>Epic recruitment application</Title>
      </Link>
      <Timer time={time} />
      <DarkMode />
    </Container>
  )
}

const Container = styled.header({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const Title = styled.h1(({ theme }) => ({
  color: theme.colors.text
}))
