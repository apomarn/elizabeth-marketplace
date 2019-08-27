import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles } from '../../styles'

const Header = styled.p`
  font-size: 28px;
  color: ${colors.gray};
  text-align: left;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 0;
`

const Underline = styled.div`
  background-color: ${colors.gray};
  height: 5px;
  width: 455px;
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
