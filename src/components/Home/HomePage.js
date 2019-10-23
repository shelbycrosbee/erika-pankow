import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import './index.css'
import AboutMenu from '../Navigation/AboutMenu'
import DonateButton from '../Navigation/DonateButton'
import ApplyButton from '../Navigation/ApplyButton'

export default class HomePage extends Component {
  render() {
    return (

      <div className="homePageBackground" >
            <Grid container justify="center" >
              <Grid item>
        <h1 className="titleColor" style={{fontSize:'45px'}}><b>Erika Pankow Scholarship Foundation</b></h1>
        </Grid>
        </Grid>
        {/* <h1 className="paragraphColor"><b>Erika Pankow Scholarship Foundation</b></h1> */}
        <Grid container spacing={3} justify="center" className="linksFont">
          <Grid lg={4} md={4} sm={4} xs={12} item >
           <Button className="navTag"> <AboutMenu /> </Button>
          </Grid>

          <Grid lg={4} md={4} sm={4} xs={12} item >
             <ApplyButton /> 
          </Grid>

          <Grid lg={4} md={4} sm={4} xs={12} item >
           <DonateButton />
          </Grid>
        </Grid>

      </div>

    )
  }
}
