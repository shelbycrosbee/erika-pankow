import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Grid } from '@material-ui/core'
import highway from '../../images/highway.jpg'
import litter from '../../images/litter.jpg'
import './highway.css'

export default class Highway extends Component {
  render() {
    return (
      <div  style={{marginTop: '3em', paddingLeft:'3em', paddingRight:'3em'}} justify="center">
        <Header />
        <Grid container justify="center">
          <Grid item>
          <h1>The Erika Pankow Scholarship Foundation has adopted mile marker 33 to 36 on US Highway 191 </h1>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid ><img src={highway} alt='highway'className="highwayPhoto"/></Grid>
          <Grid ><img src={litter} alt='litter'className="highwayPhoto"justify="center"/></Grid>
        </Grid>
      </div>
    )
  }
}