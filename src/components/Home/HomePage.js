import React, { Component } from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core'
import './index.css'
import AboutMenu from '../Navigation/AboutMenu'
import DonateButton from '../Navigation/DonateButton'
import ApplyButton from '../Navigation/ApplyButton'

export default class HomePage extends Component {
  render() {
    return (

      <div className="homePageBackground" >
        <h1 className="paragraphColor"><b>Erika Pankow Scholarship Foundation</b></h1>

        <Grid container spacing={3} justify="center" wrap className="linksFont">
          <Grid lg={4} md={4} sm={4} xs={12} item>
           <h3 > <AboutMenu /> </h3>
          </Grid>
          <Grid lg={4} md={4} sm={4} xs={12} item>
            <h3 > <ApplyButton /> </h3>
          </Grid>
          <Grid lg={4} md={4} sm={4} xs={12} item>
           <h3 > <DonateButton /> </h3> 
          </Grid>
        </Grid>
      </div>

    )
  }
}
