import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles } from '../../styles'

const Header = styled.p`
  font-size: 28px;
  color: ${colors.gray};
`

const Underline = styled.div`
  background-color: ${colors.gray};
  height: 10px;
  width: 40px;
`

class PopularSection extends Component {
  render() {
    return (
      <div>
        <Header>ARTICULOS POPULARES DEL MES</Header>
        <Underline></Underline>
      </div>
    )
  }
}

export default PopularSection
