import React from "react";
import { Query } from "react-apollo";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  console.log("양화id", movieId);
  return <div>Detail</div>;
};

export default Detail;
