import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles } from '../../styles'

const Header = styled.p`
  font-size: 28px;
  color: ${colors.gray};
`

class PopularSection extends Component {
  render() {
    return (
      <div>
        <Header>ARTICULOS POPULARES DEL MES</Header>
      </div>
    )
  }
}

export default PopularSection
