import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Container } from '@material-ui/core'
import './index.css'

export default class HomePage extends Component {
  render() {
    return (

      <Container className="homePageBackground">
        <Header />
        <p className="paragraphColor">Today, a plaque stands in Erika's honor marking her namesake ski run off Big Sky's Lone Peak, called Erika's Glade. 'Adopt a Highway' off Hwy 191 at mile marker 33-36 is also adopted in Erika's honor. For those who worked with Erika and were touched by her kind spirit, for memories of her are still fresh in thier minds. "Erika's smile was one that would light up your life," said long time Big Sky ski patroller Jay Frisque (AKA Magnum). "She was someone special, and she just wanted to help people"</p>

      </Container>

    )
  }
}
