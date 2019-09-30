import React, { Component } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import Header from '../Navigation/Header'

export default class BoardMembers extends Component {
  render() {
    return (
      <Container>
        <Header />
       
        <Grid container justify="center">
          <Grid item > <h1>Board Members</h1></Grid>
          </Grid>
          <Grid container spacing={3} >
          <Grid item lg={4} md={4} sm={6} className="memberCards">
            <Typography>Mark Loomis Fire Department </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={6} className="memberCards">
            <Typography> Bart Mitchell Ski Patrol </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={6} className="memberCards">
            <Typography>Rachel Smith Search and Rescue</Typography>
          </Grid>
        </Grid>
      </Container>
    )
  }
}
