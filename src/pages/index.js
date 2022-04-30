import React, { useEffect } from "react";

const Index = ({ history }) => {
  useEffect(() => {
    history.push("/home");
  });
  return <div></div>;
};

export default Index;
