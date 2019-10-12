import React, { Component } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import Header from '../Navigation/Header'

export default class BoardMembers extends Component {
  render() {
    return (
      <>
        <Header />
        <Container style={{ marginTop: '5em' }}>
          <Grid container justify="center">
            <Grid item > <h1>Board Members</h1></Grid>
          </Grid>
          <Grid container spacing={3} >
            <Grid item lg={4} md={4} sm={6} className="memberCards">
              <Typography>Mark Loomis Fire Department </Typography>
              <img src="https://bigskyfire.org/wp-content/uploads/2018/04/local-4732-big-sky-montana-fire-department-badge-resort-tax.png" alt="fire dept" />

            </Grid>
            <Grid item lg={4} md={4} sm={6} className="memberCards">
              <Typography> Bart Mitchell Ski Patrol </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={6} className="memberCards">
              <Typography>Rachel Efta Search and Rescue</Typography>
              <img src="http://www.bssar.org/images/logo.gif" alt="search and rescue" />
            </Grid>
          </Grid>
          <Grid container spacing={1} justify="center"> 
          <Grid item><b>Board Member Roles:</b>
        <ul>
              <li>
                Positive Big Sky Community Member
          </li>
              <li>Vote for fundraising events/ideas</li>
              <li>Review website occasionally for needed updates and changes</li>
              <li>Meet as needed to review scholarships <ul>
                <li>Nominate recipients</li>
                <li>Delegate scholarships based on funds available</li>
                <li>Follow up with schoalrship recipients</li>
                <li>Update schoalrship application as needed</li>
              </ul></li>
            </ul>
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}
