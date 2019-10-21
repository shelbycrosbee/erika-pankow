import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'
import danny from '../../images/Danny.jpg'
import danny2 from '../../images/Danny2.jpg'
import tyler from '../../images/Tyler.png'
import noah from '../../images/noah.jpg'
import noah2 from '../../images/noah2.jpg'
import shives from '../../images/shives.jpg'
import katie from '../../images/katie.jpg'
import luke from '../../images/luke.jpg'
import kjetil from '../../images/kjetil.jpg'
import orient from '../../images/orient.jpg'
import nick from '../../images/nick.JPG'
import nick2 from '../../images/nick2.jpeg'
import './recipients.css'




export default class Recipients extends Component {



  render() {
    return (
      <Container style={{ marginTop: '3em', marginBottom: '2em' }}>
        <Header />
        <Grid container justify="center">
          <Grid item>
            <h1>Recipients of an EPSF Scholarship</h1>
          </Grid></Grid>
        <Grid container justify="center" style={{ marginTop: '1em', marginBottom: '2em' }}>

          <Grid item>
            <img src={luke} alt="luke" className="imgRecipients" />
            <figcaption>2019 Luke Thompson Avalance 2</figcaption>
          </Grid>
          <Grid item>
            <img src={shives} alt="shives" className="imgRecipients" />
            <figcaption>2018 Ian Shives and Flapjack <br/> <a href="https://www.americanavalancheinstitute.com/courses/k9-training-course/">American Avalanche Institiue K9 Training </a></figcaption>
          </Grid>
          <Grid item>
            <img src={nick} alt="nick" className="imgRecipients"/>
            <img src={nick2} alt="nick 2" className="imgRecipients"/>
            <figcaption>2018 Nick Efta Firefighter 2</figcaption>
          </Grid>
          <Grid item>
            <img src={kjetil} alt="kjetil" className="imgRecipients"/> <img src={orient} alt="orient" className="imgRecipients"/>
            <figcaption>2017 Kjetil Hassmen and Nate McClain community orienteering program</figcaption>
          </Grid>
          <Grid item>
            <img src={noah} alt="noah" className="imgRecipients" /><img src={noah2} alt="noah2" className="imgRecipients" /><figcaption>2015 Noah Ronczkowski <br /><a href="https://riggingforrescue.com/">Rigging for Rescue</a></figcaption>
          </Grid>
          <Grid item>
            <img src={danny} alt="Danny and Pulver" className="imgRecipients" /><img src={danny2} alt="Danny and Pulver 2" className="imgRecipients" /><figcaption>Danny Skilling and Pulver  <br /> <a href="http://www.carda.ca/">Canadian Avalance Rescue Dog Association</a> (CARDA)</figcaption>
          </Grid>
          <Grid item>
            <img src={tyler} alt="Tyler and Ruger" className="imgRecipients" /><figcaption>Tyler Dingerson and Ruger <br /><a href="http://www.carda.ca/">CARDA</a></figcaption>
          </Grid>
          <Grid item>
            <img src={katie} alt="katie" className="imgRecipients" />
            <figcaption>2005 Katie Feris and Mowgli <br /><a href="https://www.wbrescue.org/professional-schools-seminars.html">Wasatch Backcountry Rescue</a> </figcaption>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
