/* eslint-disable no-unused-vars */
import React from 'react';
import { SpinnerCircular } from 'spinners-react';



const Loader = () => {
  return (

    <SpinnerCircular size={89}
    className="mt-[24%] ml-[48%]"
     thickness={180} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 1)" />
  );
};

export default Loader;
