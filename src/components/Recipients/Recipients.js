import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Grid } from '@material-ui/core'
import danny from '../../images/Danny.jpg'
import danny2 from '../../images/Danny2.jpg'
import tyler from '../../images/Tyler.png'
import noah from '../../images/noah.jpg'
import noah2 from '../../images/noah2.jpg'
import shives from '../../images/shives.jpg'
import shives2 from '../../images/shives2.jpeg'
import katie from '../../images/katie.jpg'
import luke from '../../images/luke.jpg'
import luke2 from '../../images/luke2.jpeg'
import kjetil from '../../images/kjetil.jpg'
import orient from '../../images/orient.jpg'
import nick from '../../images/nick.jpeg'
import nick2 from '../../images/nick2.jpeg'
import dogs from '../../images/patrol dogs.jpg'
import './recipients.css'




export default class Recipients extends Component {



  render() {
    return (
      <div style={{ marginTop: '3em', marginBottom: '2em', paddingLeft:'3em', paddingRight:'3em' }}>
        <Header />
        <Grid container justify="center">

          <Grid item>
            <h1>EPSF Scholarship Recipients</h1>
          </Grid>
          </Grid>
        <Grid container justify="center" style={{ marginTop: '1em', marginBottom: '2em' }}>
       
          <Grid item>
            <img src={luke} alt="luke" className="imgRecipients" />
            <img src={luke2} alt="luke2" className="imgRecipients" />
            <figcaption>2019 Luke Thompson Avalance 2<br/><a href="https://www.facebook.com/pages/category/Education/Big-Sky-Avalanche-Foundation-for-Education-BSAFE-125755794796912/">Big Sky Avalanche Foundation for Education</a> (BSAFE)</figcaption>
        
          </Grid>
         
          <Grid item>
            <img src={shives} alt="shives" className="imgRecipients" />
            <img src={shives2} alt="shives2" className="imgRecipients" />
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
            <img src={danny} alt="Danny and Pulver" className="imgRecipients" /><img src={danny2} alt="Danny and Pulver 2" className="imgRecipients" /><figcaption>2005 Danny Skilling and Pulver  <br /> <a href="http://www.carda.ca/">Canadian Avalance Rescue Dog Association</a> (CARDA)</figcaption>
          </Grid>
       

         
          <Grid item>
            <img src={tyler} alt="Tyler and Ruger" className="imgRecipients" /><figcaption>2005 Tyler Dingerson and Ruger <br /><a href="http://www.carda.ca/">CARDA</a></figcaption>
          </Grid>
        

         
          <Grid item>
            <img src={katie} alt="katie" className="imgRecipients" />
            <figcaption>2005 Katie Feris and Mowgli <br /><a href="https://www.wbrescue.org/professional-schools-seminars.html">Wasatch Backcountry Rescue</a> </figcaption>
          </Grid>
          <Grid item>
            <img src={dogs} alt="patrol dogs" className="imgRecipients" />
            <figcaption>Mowgli the chocolate lab with his Patrol Dog friends </figcaption>
          </Grid>
        </Grid>
      </div>
    )
  }
}
