import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { BASE_URL } from "../constants";

const fetchColors = (pageNumber) => {
  return axios.get(BASE_URL+`/colors?_limit=2&_page=${pageNumber}`);
};
export const PaginatedColors = () => {
    const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, data, isError, error } = useQuery(["colors", pageNumber], () => fetchColors(pageNumber),{
      keepPreviousData:true
  });

  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQ Colors Page</h2>
      {data?.data.map((color) => {
        return <div key={color.id}>{color.label}</div>;
      })}
      <div>
          <button onClick={() => setPageNumber(pageNumber => pageNumber - 1)} disabled={pageNumber === 1}>Prev</button>
          <button onClick={() => setPageNumber(pageNumber => pageNumber + 1)} disabled={pageNumber === 4}>Next</button>
      </div>
    </>
  );
};
