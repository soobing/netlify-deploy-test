import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${props => props.isSelected ? 'yellowgreen' : 'white'};
`

export default () => {
  const [isSelected, setIsSelected] = useState(false);
  return <Title isSelected={isSelected}
    onClick={() => setIsSelected(!isSelected)}>My page</Title>
}
