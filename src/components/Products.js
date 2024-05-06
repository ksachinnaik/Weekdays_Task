import React, { useEffect, useState } from "react";
import {
  Box,
  useMediaQuery,
} from "@mui/material";
import Product from "./Product";
import Loading from "./Loading";

const Products = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const fetchData = () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit,
      offset,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        setData((prevData) => [...prevData, ...responseData.jdList]);
        setOffset((prevOffset) => prevOffset + limit);
        setLoading(false);
        setLoad(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        setLoad(false);
        console.error("Fetching error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch initial data

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchData(); 
        setLoad(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
    {load && <Loading />}
    </Box>
  );
};

export default Products;