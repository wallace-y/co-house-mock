import React from 'react';

const CompanyCard = ({ company: { company_number,company_status,date_of_creation,title } }) => {
  return (
    <div className="company" key={company_number}>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default CompanyCard;