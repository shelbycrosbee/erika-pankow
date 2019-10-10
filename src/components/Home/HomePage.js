import React, { Component } from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core'
import './index.css'
import AboutMenu from '../Navigation/AboutMenu'
import DonateButton from '../Navigation/DonateButton'
import ApplyButton from '../Navigation/ApplyButton'

export default class HomePage extends Component {
  render() {
    return (

      <Container className="homePageBackground">
        <p className="paragraphColor"><b>Erika Pankow Scholarship Foundation</b></p>

        <Grid container spacing={3} justify="center" wrap >
          <Grid lg={4} md={4} sm={4} xs={12} item>
           <p className="linksFont"> <AboutMenu /> </p>
          </Grid>
          <Grid lg={4} md={4} sm={4} xs={12} item>
            <p className="linksFont"> <ApplyButton /> </p>
          </Grid>
          <Grid lg={4} md={4} sm={4} xs={12} item>
           <p className="linksFont"> <DonateButton /> </p> 
          </Grid>
        </Grid>
      </Container>

    )
  }
}
