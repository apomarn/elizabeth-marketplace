import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, textStyles, breakpoints } from '../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const MyDiv = styled.div`
  background-color: rgb(250, 250, 250, 80%);
  display: flex;
  width: 80%;
  flex-direction: column;
  padding: 15px 0px;
  border-radius: 25px;
  position: absolute;
  bottom: -140px;
  border: 2px ${colors.gray} solid;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    position: absolute;
    bottom: -1px;
    border: 2px ${colors.gray} solid;
  }
`

const Phrase = styled.h3`
  color: ${colors.gray};
  padding-bottom: 5px;
  ${textStyles.h4Bold}

  @media screen and (min-width: ${breakpoints.desktop}px) {
    padding-bottom: 5px;
    ${textStyles.h3Bold}
  }
`

const Carousel = styled.div`
  position: relative;
`

const LogoDiv = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    position: absolute;
    top: 40px;
    left: 40px;
  }
`

const Logo = styled.img`
  width: 60px;
  heigth: 60px;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 150px;
    heigth: 150px;
  }
`

const Input = styled.input`
  border-radius: 20px;
  padding: 5px 0 5px 20px;
`

class Hero extends Component {
  render() {
    return (
      <Container>
        <Carousel className='bd-example'>
          <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
            {/* <ol className='carousel-indicators'>
              <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active' />
              <li data-target='#carouselExampleCaptions' data-slide-to='1' />
              <li data-target='#carouselExampleCaptions' data-slide-to='2' />
              <li data-target='#carouselExampleCaptions' data-slide-to='3' />
            </ol> */}
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img src='../images/hero1.png' className='d-block w-100' alt='hero1' />
                <div className='carousel-caption d-none d-md-block'>
                  {/* <h5>TODO LO QUE NECESITAS EN UN SOLO LUGAR</h5>
                  <p>ghj</p> */}
                </div>
              </div>
              <div className='carousel-item'>
                <img src='../images/hero2.png' className='d-block w-100' alt='hero2' />
                <div className='carousel-caption d-none d-md-block'>
                  {/* <h5>TODO LO QUE NECESITAS EN UN SOLO LUGAR</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </div>
              </div>
              <div className='carousel-item'>
                <img src='../images/hero3.png' className='d-block w-100' alt='hero3' />
                <div className='carousel-caption d-none d-md-block'>
                  {/* <h5>TODO LO QUE NECESITAS EN UN SOLO LUGAR</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </div>
              </div>
              <div className='carousel-item'>
                <img src='../images/hero4.png' className='d-block w-100' alt='hero3' />
                <div className='carousel-caption d-none d-md-block'>
                  {/* <h5>TODO LO QUE NECESITAS EN UN SOLO LUGAR</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </div>
              </div>
            </div>
            <a className='carousel-control-prev' href='#carouselExampleCaptions' role='button' data-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true' />
              <span className='sr-only'>Previous</span>
            </a>
            <a className='carousel-control-next' href='#carouselExampleCaptions' role='button' data-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true' />
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </Carousel>
        <MyDiv>
          <Phrase>TODO LO QUE NECESITAS EN UN SOLO LUGAR</Phrase>
          <form>
            <Input type='search' placeholder='   Busca tu artículo' />
          </form>
        </MyDiv>
        <LogoDiv>
          <Logo src='../images/logo.png' />
        </LogoDiv>
      </Container>
    )
  }
}

export default Hero
