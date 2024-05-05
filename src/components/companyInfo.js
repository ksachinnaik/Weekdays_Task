import React from 'react';
import Typography from '@material-ui/core/Typography';

const CompanyInfo = ({ company, location }) => {
  return (
    <Typography color="textSecondary">
      {company} - {location}
    </Typography>
  );
};

export default CompanyInfo;
