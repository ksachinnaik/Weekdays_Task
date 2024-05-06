import React, { useEffect, useState } from "react";
import {
  Box,
  useMediaQuery,
} from "@mui/material";
import Product from "./Product";

const Products = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "limit": 10,
            "offset": 0
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then(response => response.json()) 
            .then(data => {
                setData(data.jdList);
                console.log(data);
            })
            .catch(error => {
                setError(error);
                console.error("Fetching error:", error);
            });
    }, []); 

  return (
    <Box m="1.5rem 2.5rem">
    {error && <p>Error: {error.message}</p>}
      {data ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {Array.isArray(data) && data.map(
  ({
    jdUid,
    companyName,
    jobDetailsFromCompany,
    minJdSalary,
    jdLink,
    jobRole,
    location,
    logoUrl,
    minExp,
    maxExp,
    salaryCurrencyCode,
  }) => (
    <Product
      key={jdUid} 
      _id={jdUid}
      companyName={companyName}
      description={jobDetailsFromCompany} 
      salary={minJdSalary}
      category={jobRole} 
      link={jdLink}
      location={location}
      salaryCurrencyCode={salaryCurrencyCode}
      stat={`${minExp}-${maxExp} years`} 
      logoUrl={logoUrl} 
    />
  )
)}

        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;