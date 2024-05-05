import React from 'react';
import Typography from '@material-ui/core/Typography';

const JobTitle = ({ title }) => {
  return <Typography variant="h5" component="h2">{title}</Typography>;
};

export default JobTitle;
