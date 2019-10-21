import React from 'react'
import Header from '../Navigation/Header'
import { Container, Grid } from '@material-ui/core'
import bssa from '../../images/bssa.png'

export default class Donate extends React.Component {

  render() {
    return (
      <Container >
      <Header/>
      
      <p style={{ marginTop:'4em'}}>
      <h3>How To Donate</h3>
        If you would like to give to the Erika Pankow Scholarship Fund you can head down to First Security Bank in Big Sky, MT and say you would like to donate to account name Erika Scholaraship Fund, the checking account number 221112.
        </p>
      <p>
        For a receipt to confirm payment, please email erikapankowscholarshipfund@gmail.com
      </p>
      <Grid container>
        <h1>Past Sponshorship</h1>
        <Grid item>
          <img src={bssa} alt="bssa" className="donateImg"/>
        </Grid>
      </Grid>
      </Container>
    )
  }
}
