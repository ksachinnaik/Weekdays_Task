import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Product = ({ category, companyName, description, salaryCurrencyCode, salary, link, location }) => {
  const formattedSalary = Number(salary).toFixed(2);

  return (
    <Card
      sx={{
        backgroundColor: 'white',
        borderRadius: '0.55rem',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: 345,
        margin: '1rem',
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {companyName}
        </Typography>
        <Typography variant="h6" component="div">
          {location}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: '1rem' }}>
          {salaryCurrencyCode} ${formattedSalary}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={link} size="small" color="primary">
          See More
        </Button>
        <Button variant="contained" size="small">
          Easy Apply
        </Button>
        <Button variant="outlined" size="small">
          Referral's
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
