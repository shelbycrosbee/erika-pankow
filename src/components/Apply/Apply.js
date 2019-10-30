import React, { Component } from 'react';
import Header from '../Navigation/Header';
import { Grid, Button } from '@material-ui/core';
import app from '../../images/application.pdf';
import './apply.css';

export default class Apply extends Component {
  render() {
    return (
      <div style={{ marginTop: '3em', paddingLeft:'3em', paddingRight:'3em', paddingBottom:'3em' }}>
        <Header />
        <Grid container justify="center">
        <h1>Apply</h1>
          <Grid item >
          
            <p><b>Background: </b>
              The Erika Pankow Scholarship Fund was founded in 1997, through generous donations, sponsorships and fundraising events. Members from Big Sky Search and Rescue, Gallatin Canyon Volunteer Fire Department, and Big Sky Ski Patrol originally managed the fund, as Erika was a member of each organization. Today, 3 elected memebers of the Big Sky Ski Patrol manage the scholarships. Full or partial scholarships will be given, dependent on the availability of funds in the scholarship account.
  </p>
            <p>
              <b>Eligibility: </b>
              There are no age requirements, no preference based on age, gender, race, disability, ethnicity or religion. Preference will be given to individuals who live within the greater Gallatin Valley community, and are able to provide proof of acceptance and ability to successfully complete their desired course. Funds will be made out directly to course financial coordinators or companies. Funds can also be issued retroactively.
  </p>
            <p>
              <b>Criteria: </b>
              The fund provides financial support of half the course cost (up to $600.00), to deserving individuals who are interested in advancing their medical, search and rescue or avalanche related skills (e.g. EMT, OEC, CPR, Swiftwater Rescue, Avalanche training, Ropes Courses, Avalanche Dog training.) The fund focuses on individuals who are looking to become leaders in our community.
  </p>

            <p>
              <b>Application Requirements: </b>
              A complete and legible application form.
              A typed personal statement of 500 words or less discussing interests, goals and how this award opportunity will reflect on you and your community.
              Three letters of recommendation with current contact information.
              Available for personal interview if necessary.
</p>
            {/* <p>Please send applications to:  */}
            {/*               
             <a href="mailto:erikapankowscholarshipfund@gmail.com">erikapankowscholarshipfund@gmail.com</a> */}
            <Grid item style={{textAlign:"center"}}>
              <Button href={app} target="_blank" className="pdfButton" >Download Application</Button>
            </Grid>
            {/* </p> */}



          </Grid>
        </Grid>
      </div>
    )
  }
}