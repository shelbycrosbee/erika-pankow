import React, { Component } from 'react'
import Header from '../Navigation/Header'
import { Grid } from '@material-ui/core'
import highway from '../../images/highway.jpg'
import litter from '../../images/litter.jpg'
import baw from '../../images/baw.jpg'
import './highway.css'
import Contact from '../Contact/Contact'
import BoardMembers from '../BoardMembers/BoardMembers'

export default class Highway extends Component {
  render() {
    return (
      <>
      <Header />
      <div  style={{marginTop: '5em', paddingLeft:'3em', paddingRight:'3em'}} justify="center">
      <Grid container justify="center">
         
         <Grid item>
         <h1>The Erika Pankow Scholarship Fund is organized by the women of Big Sky Ski Patrol </h1>
         </Grid>
       </Grid>
    
        <Grid container spacing={1} justify="center">
          <Grid ><img src={baw} alt='baw'className="highwayPhoto"/></Grid>
        </Grid>
        <Grid container justify="center">
         
          <Grid item>
          <h1>EPSF has adopted mile marker 33 to 36 on US Highway 191 </h1>
          </Grid>
        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid ><img src={highway} alt='highway'className="highwayPhoto"/></Grid>
          <Grid ><img src={litter} alt='litter'className="highwayPhoto"justify="center"/></Grid>
        </Grid>
        <BoardMembers />
        <div  style={{marginBottom: '5em', paddingLeft:'25vw', paddingRight:'25vw'}} justify="center">
        <Contact />
        </div>
      </div>
      </>
    )
  }
}