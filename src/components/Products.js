import React, { useEffect, useState } from "react";
import {
  Box,
  useMediaQuery,
} from "@mui/material";
import Product from "./Product";
import Loading from "./Loading";
import Filters from "./Filters";
import filters from "../data/data";

const Products = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);
  const [offset, setOffset] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
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
        console.log(data.length);
        console.log(data);
        setOffset((prevOffset) => prevOffset + limit);
        setLoading(false);
        setLoad(false);
        console.log(responseData);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        setLoad(false);
        console.error("Fetching error: ", error);
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


  const onFilter = (selectedOptions, key) => {

      var searchKey;
      switch(key) {
          case "Roles":
            searchKey = "jobRole";
            break;

          case "Mode":
            searchKey = "location";
            break;

          case "Minimum Base Pay Salary (LPA)":
            searchKey = "minJdSalary";
            break;

          case "Experience (years)":
            searchKey = "minExp";
            break;
      }

      let filterOptions = [];
      selectedOptions.map(option => {
          (typeof option.value === "string") ? filterOptions.push(option.value.toLowerCase()) : filterOptions.push(option.value);
      })

      setData(data.filter(cur => {
          return (typeof cur[searchKey] === "string") ? filterOptions.includes(cur[searchKey].toLowerCase()) : 
                    filterOptions.includes(cur[searchKey]);
      }))
  }

  return (

    <div>
      <Filters
        filters={filters}
        onFilter={onFilter}
      />
    <Box m="1.5rem 2.5rem">

    {error && <p>Error: {error.message}</p>}
      {data ? (
        <Box
          mt="20px"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          gap="30px 10px"
          flexWrap="wrap"
        >
         { data.map((cur,index) => {
 
  return <Product
      key={index} 
      _id={cur.jdUid}
      companyName={cur.companyName}
      description={cur.jobDetailsFromCompany} 
      salary={cur.minJdSalary ? `${cur.minJdSalary}-${cur.maxJdSalary}` : "Not disclosed"} 
      category={cur.jobRole} 
      link={cur.jdLink}
      location={cur.location}
      salaryCurrencyCode={cur.salaryCurrencyCode}
      stat={cur.minExp ? `${cur.minExp} years` : "Not disclosed"}
      logoUrl={cur.logoUrl} 
    />
})}

        </Box>
      ) : (
        <>Loading...</>
      )}
    {load && <Loading />}
    </Box>
    </div>
  );
};

export default Products;