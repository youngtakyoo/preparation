import React from "react";

const Main = (props) => {
  const { testValue } = props;
  console.log(testValue);
  return <div>This is Main Page {testValue}</div>;
};

export default Main;
