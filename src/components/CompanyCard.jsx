import React from 'react';
import { Row,Col } from 'react-bootstrap';

const CompanyCard = ({ company: { company_number,company_status,date_of_creation,title } }) => {
  return (
    <Col sm={12} md={6} lg={2} className="company card m-5" key={company_number}>
      <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Company status: {company_status}</p>
          <p class="card-text">Company number: {company_number}</p>
          <a href={"https://find-and-update.company-information.service.gov.uk/company/"+company_number}
              class="btn btn-dark">Go somewhere</a>
      </div>
    </Col>
  );
}

export default CompanyCard;