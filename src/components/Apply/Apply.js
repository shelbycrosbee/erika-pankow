import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'


export default class Apply extends Component {
  render() {
    return (
      <Container  style={{marginTop: '7em'}}>
        <Header />
        <Grid container justify="center">
          <Grid item>
          <h1>Apply</h1>
          <p>To apply, please fill out this pdf....</p>
          </Grid>
        </Grid>
      </Container>
    )
  }
}