import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './filters.css';
import { skeletonClasses } from '@mui/material';

const animatedComponents = makeAnimated();

export default function Filters(props) {

  const filters = props.filters;
  
  const handleChange = (selectedOptions, searchKey) => {
      console.log(selectedOptions);
      props.onFilter(selectedOptions, searchKey);
  }

  return (
    <div className='filter-container'>
      {Object.keys(filters).map(key => {
        return   <Select
        className='filter-component'
        key={key}
        placeholder={key}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        defaultValue=""
        options={filters[key]}
        onChange={(selectedOptions) => handleChange(selectedOptions, key)}
      />
      })}
    </div>
  );
}