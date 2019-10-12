import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'
import highway from '../../images/highway.jpg'
import litter from '../../images/litter.jpg'
import './highway.css'

export default class Highway extends Component {
  render() {
    return (
      <Container  style={{marginTop: '3em'}}>
        <Header />
        <Grid container spacing={1} justify="center">
          <Grid item>
          <h1>Adopt a Highway</h1>
          <p>The EPSF has adopted US Highway 191 from mile marker 33 to 36 us191</p>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6}><img src={highway} alt='highway'className="highwayPhoto"/></Grid>
          <Grid item lg={6} md={6}><img src={litter} alt='litter'className="highwayPhoto"/></Grid>
        </Grid>
      </Container>
    )
  }
}