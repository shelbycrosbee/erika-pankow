import React from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'
import './index.css'
import plaque from '../../images/plaque.jpg'


class AboutPage extends React.Component {
  render() {
    return (
      <Container >
        <Header />
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6}>
            <p>The winter season at Big Sky Resort brings 110 ski patrollers together for six months of cold, wind filled, yet satisfying work. They work long hours, sometimes in dangerous avalanche terrain, trying to create a safer ski environment, while also assisting in intense medical events. Throughout each season, the ski patrollers forge strong relationships, becoming more like a close-knit family than just a team of coworkers. Erika Pankow was part of this close-knit family.
<br />
              On December 25, 1996, while working her regular avalanche route, Big Sky ski patroller Erika Pankow was in an explosives accident that claimed her life. The event rocked the ski world at an international level and deeply saddened the local community. The Big Sky ski patrol family was beyond devastated to lose one of their own. Along with working on the patrol, Erika volunteered and invested much of her time with the Big Sky Search and Rescue and Gallatin Canyon Volunteer Fire Department. Today Erika’s tenacious spirit and dedication to emergency medical education is memorialized through the Erika Pankow Scholarship Fund: established in 1997.
<br />
              Scholarships are available for local Big Sky and Gallatin Valley residents who are interested in attending training in emergency medicine, Search and Rescue, fire and avalanche safety. Applications for complete and partial scholarships are accessible through the website:
</p>
          </Grid>
          <Grid item lg={6} md={6} sm={4}>
            <div className='aboutPageImage' style={{height: '70vh', width:'90%'}}></div>
            </Grid>
        </Grid>
      </Container>
    )
  }
}

export default AboutPage;