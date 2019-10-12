import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'
import danny from '../../images/Danny.jpg'
import danny2 from '../../images/Danny2.jpg'
import tyler from '../../images/Tyler.png'
import noah from '../../images/noah.jpg'
import noah2 from '../../images/noah2.jpg'
import './recipients.css'




export default class Recipients extends Component {



  render() {
    return (
      <Container  style={{marginTop: '7em'}}>
        <Header />
        <Grid container justify="center">
          <Grid item>
          <h1>Recipients</h1>
          <p>2018 Nick Efta Firefighter 2</p>
          <img src={noah} alt="noah" className="imgRecipients"/><img src={noah2} alt="noah2" className="imgRecipients"/><p>2015 Noah Ronczkowski Rigging for Rescue</p>
          <p>2018 Ian Shives American Avalanche Institiue K9 Training</p>
          <p>2017 Kjetil Hassmen and Nate McClain community orienteering program</p>
          <img src={danny} alt="Danny and Pulver" className="imgRecipients"/><img src={danny2} alt="Danny and Pulver 2" className="imgRecipients"/><p>Danny Skilling CARDA <p>http://www.carda.ca/</p></p>
          <img src={tyler} alt="Tyler and Ruger" className="imgRecipients"/><p>Tyler Dingerson Ruger CARDA</p>
          <p>2005 Katie Feris WBR Mowgli <p>WBR Wasatch </p></p>
          <p>2019 Luke Thompson Avalance 2</p>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
