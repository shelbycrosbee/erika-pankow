import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Container } from '@material-ui/core'
import './index.css'

export default class HomePage extends Component {
  render() {
    return (

      <Container className="homePageBackground">
      //   <Header />
        <p className="paragraphColor"><b>Erika Pankow Scholarship Foundation</b></p>

      </Container> 

    )
  }
}
