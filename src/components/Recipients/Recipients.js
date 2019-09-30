import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'


export default class Recipients extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Grid container justify="center">
          <Grid item>
          <h1>Recipients</h1>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
