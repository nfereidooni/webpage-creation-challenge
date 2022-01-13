import React  from "react"
import "./style.css";
import { MDBCard, MDBCardLink, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit'


function WideCard(props) {

  return(
    <>          
          <MDBCard>
            <MDBRow className='g-0'>
              <MDBCol md='4'>
                <MDBCardImage src={props.image} alt={props.imageAlt} fluid />
              </MDBCol>
              <MDBCol md='8'>
                <MDBCardBody>
                  <MDBCardLink href={props.link}>{props.title}</MDBCardLink>
                  <MDBCardText>
                    <small className='text-muted'>{props.type}</small>
                  </MDBCardText>
                  <MDBCardText>
                  {props.description}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
  </>
  );
}

export default WideCard;