import React from 'react';

const CompanyCard = ({ company: { company_number,company_status,date_of_creation,title } }) => {
  return (
    <div className="company card" key={company_number}>
      <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Company status: {company_status}</p>
          <p class="card-text">Company number: {company_number}</p>
          <a href={"https://find-and-update.company-information.service.gov.uk/company/"+company_number}
              class="btn btn-dark">Go somewhere</a>
      </div>
    </div>
  
  );
}

export default CompanyCard;