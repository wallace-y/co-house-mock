import React from 'react';
import { Col } from 'react-bootstrap';
// import Moment from 'moment';

const CompanyCard = ({ company: { company_number,company_status,date_of_creation,title,company_type,address_snippet } }) => {

  const incorporationDate = date_of_creation;
  const date = new Date(incorporationDate);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  const formattedIncorporationDate = date.toLocaleDateString("en-GB",options)



  return (
    <Col className="company" key={company_number}>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Company status: {company_status}</p>
          <p class="card-text">Company number: {company_number}</p>
          <p class="card-text">Company type: {company_type.toUpperCase()}</p>
          <p class="card-text">Incorporation date: {formattedIncorporationDate}</p>   
          <p class="card-text">Address: {address_snippet}</p>   
          <a href={"https://find-and-update.company-information.service.gov.uk/company/"+company_number}
              class="btn btn-dark">See full profile</a>
        </div>
      </div>
    </Col>
  );
}

export default CompanyCard;