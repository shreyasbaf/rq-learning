import axios from "axios";
import React, { Fragment } from "react";
import { useInfiniteQuery } from "react-query";
import { BASE_URL } from "../constants";
import { CarDataWrapper, CarWrapper } from "./Car.style";
import { Spinner } from "./Spinner";
import { Button, Flexbox } from "./Useres.style";

const fetchCars = ({ pageParam = 1 }) => {
  return axios.get(BASE_URL + `cars?_limit=5&_page=${pageParam}`);
};

export const Cars = () => {
  const {
    isLoading,
    data,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["cars"], fetchCars, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 10) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return (
      <Flexbox>
        <Spinner fontSize="24" />
      </Flexbox>
    );
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <p style={{ padding: "0 12px", color: "#79589FCC" }}>
        Example for Infinite Queries, where data is feched on click of Load More
        button
      </p>
      <CarWrapper>
        <p>Make</p>
        <p>Model</p>
        <p>Year</p>
      </CarWrapper>
      {data?.pages.map((group, i) => {
        return (
          <Fragment key={i}>
            {group.data.map((car) => (
              <CarDataWrapper key={car.id}>
                <p>{car.make}</p>
                <p>{car.model}</p>
                <p>{car.year}</p>
              </CarDataWrapper>
            ))}
          </Fragment>
        );
      })}
      <Button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        Load More
      </Button>
      <div>
        {" "}
        {isFetching && !isFetchingNextPage ? <Spinner fontSize="24" /> : null}
      </div>
    </>
  );
};
