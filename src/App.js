import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import JobTitle from './JobTitle';
import CompanyInfo from './CompanyInfo';
import JobDescription from './JobDescription';
import Experience from './Experience';
import ApplyButton from './ApplyButton';

const JobCard = ({ job }) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardContent>
        <JobTitle title={job.title} />
        <CompanyInfo company={job.company} location={job.location} />
        <JobDescription description={job.description} />
        <Experience experience={job.experience} />
        <ApplyButton />
      </CardContent>
    </Card>
  );
};

export default JobCard;
