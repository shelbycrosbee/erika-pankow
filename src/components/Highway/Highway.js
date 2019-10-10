import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'


export default class Highway extends Component {
  render() {
    return (
      <Container  style={{marginTop: '7em'}}>
        <Header />
        <Grid container justify="center">
          <Grid item>
          <h1>Adopt a Highway</h1>
          </Grid>
        </Grid>
      </Container>
    )
  }
}