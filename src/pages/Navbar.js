import React, { Component } from 'react'
import styled from 'styled-components'

const MyDiv = styled.div`
  background-color: orange;
  height: 100px;
`
class Navbar extends Component {
  render() {
    return (
      <MyDiv>
        <p>i need the logo here</p>
      </MyDiv>
    )
  }
}

export default Navbar
