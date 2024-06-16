/* eslint-disable react/prop-types */
// import React from 'react';

const ExampleComponent = ({ message = 'Default Message' }) => {
  return <div>{message}</div>;
};

export default ExampleComponent;