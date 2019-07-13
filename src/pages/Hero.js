import React, { Component } from 'react'
import styled from 'styled-components'

const Phrase = styled.h5`
  color: black;
`
class Hero extends Component {
  render() {
    return (
      <div>
        <div className='bd-example'>
          <div id='carouselExampleCaptions' className='carousel slide' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li data-target='#carouselExampleCaptions' data-slide-to='0' className='active' />
              <li data-target='#carouselExampleCaptions' data-slide-to='1' />
              <li data-target='#carouselExampleCaptions' data-slide-to='2' />
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img src='../images/hero1.png' className='d-block w-100' alt='hero1' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5>TODO LO QUE NECESITAS EN UN SOLO LUGAR</h5>
                  <p>ghj</p>
                </div>
              </div>
              <div className='carousel-item'>
                <img src='../images/hero2.png' className='d-block w-100' alt='hero2' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5>TODO LO QUE NECESITAS EN UN SOLO LUGAR</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
              <div className='carousel-item'>
                <img src='../images/hero1.png' className='d-block w-100' alt='hero3' />
                <div className='carousel-caption d-none d-md-block'>
                  <h5>TODO LO QUE NECESITAS EN UN SOLO LUGAR</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
        </div>
      </div>
    )
  }
}

export default Hero
