import React from 'react'
import Header from '../Navigation/Header'
import { Container, Grid, Box } from '@material-ui/core'
import './index.css'
import plaque from '../../images/plaque.jpg'
import erika from '../../images/erika.jpg'
import glade from '../../images/glade.jpg'

class AboutPage extends React.Component {



  render() {
    return (
    <>
        <Header />
        <Container>
        <Grid container spacing={2} style={{marginTop: '4em'}}>
        <Grid item lg={6} md={12} sm={12} xs={12}> 
          <img src={erika} alt="erika" className="erikaImg"/>
   
            <p> The winter season at Big Sky Resort brings 110 ski patrollers together for six months of cold, wind filled, yet satisfying work. They work long hours, sometimes in dangerous avalanche terrain, trying to create a safer ski environment, while also assisting in intense medical events. Throughout each season, the ski patrollers forge strong relationships, becoming more like a close-knit family than just a team of coworkers. Erika Pankow was part of this close-knit family.

              <p>On December 25, 1996, while working her regular avalanche route, Big Sky ski patroller Erika Pankow was in an explosives accident that claimed her life. The event rocked the ski world at an international level and deeply saddened the local community. The Big Sky ski patrol family was beyond devastated to lose one of their own. Along with working on the patrol, Erika volunteered and invested much of her time with the Big Sky Search and Rescue and Gallatin Canyon Volunteer Fire Department. Today Erika’s tenacious spirit and dedication to emergency medical education is memorialized through the Erika Pankow Scholarship Fund: established in 1997.</p>

              <p>Scholarships are available for local Big Sky and Gallatin Valley residents who are interested in attending training in emergency medicine, search and rescue, fire and avalanche safety. Applicants who are awarded a scholarship will have half of their course costs covered--up to $600.00.</p>

              <p>Today, a plaque stands in Erika's honor marking her namesake ski run off Big Sky's Lone Peak, called Erika's Glade. 'Adopt a Highway' off Hwy 191 at mile marker 33-36 is also adopted in Erika's honor. For those who worked with Erika and were touched by her kind spirit, for memories of her are still fresh in thier minds. "Erika's smile was one that would light up your life," said long time Big Sky ski patroller Jay Frisque (AKA Magnum). "She was someone special, and she just wanted to help people"</p>
</p>
          </Grid>
     
          <Grid item  lg={5} md={12} sm={12} xs={12} alignContent="center">
           <img src={plaque} alt="plaque" className='plaqueImg'/>
            <img src={glade} alt="glade" className='gladeImg'/>
          </Grid>
           
        </Grid>
      </Container>
      </>
    )
  }
}

export default AboutPage;