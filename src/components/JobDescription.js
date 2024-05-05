import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

const JobDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Typography variant="body2" component="p" style={{ marginTop: 10 }}>
      {expanded ? description : `${description.substring(0, 150)}...`}
      <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleExpandClick}>
        {expanded ? ' Read less' : ' Read more'}
      </span>
    </Typography>
  );
};

export default JobDescription;
