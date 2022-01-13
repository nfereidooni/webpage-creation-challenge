import React  from "react"
import "./style.css";
import { MDBCard, MDBCardLink, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit'


function WideCard(props) {

  return(
    <>          
          <MDBCard>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
                <MDBCardImage src='https://prepr-media-live.s3.ca-central-1.amazonaws.com/uploads/challenge/hn6fd9vCImNkx6Eygm4cNkUnO.png' alt='Backend Developer Challenge icon Banner' fluid />
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardLink href="https://preprlabs.org/challengeManager/backend-developer-challenge-1-sql">Backend Developer Challenge 1: SQL</MDBCardLink>
                  <MDBCardText>
                    <small className='text-muted'>Challenge</small>
                  </MDBCardText>
                  <MDBCardText>
                  Introduction: SQL is a query language that is used to interact with databases. It is a Domain Specific Language, meaning it is a specialized language that is used for working with data in databases.
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
  </>
  );
}

export default WideCard;