import React from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'
import bssa from '../../images/bssa.png'
import sponsors from '../../images/sponsors.JPG'
import beehive from '../../images/beehive.png'
import cave from '../../images/cave.jpg'
import cave2 from '../../images/cave2.jpg'


export default class Donate extends React.Component {

  render() {
    return (
      <Container >
      <Header/>
      <h1 style={{ marginTop:'3em'}}>How To Donate</h1>
      <p>
    
        If you would like to give to the Erika Pankow Scholarship Fund, head down to First Security Bank in Big Sky, MT and make your donation to account name Erika Scholaraship Fund, checking account number 221112.
        </p>
      <p>
        For a receipt to confirm payment, please email erikapankowscholarshipfund@gmail.com
      </p>
      <h1>Past Sponshorship</h1>
      <Grid container>
        
        <Grid item>
          <img src={bssa} alt="bssa" className="donateImg"/>
        </Grid>
        <Grid item>
          <img src={beehive} alt="beehive" className="donateImg" />
        </Grid>
        <Grid item>
          <img src={cave} alt="cave" className="donateImg" />
        </Grid>
        <Grid item>
          <img src={cave2} alt="cave2" className="sponsorImg" />
        </Grid>
        <Grid item>
          <img src={sponsors} alt="sponsors" className="sponsorImg"/>
        </Grid>
      </Grid>
      </Container>
    )
  }
}
