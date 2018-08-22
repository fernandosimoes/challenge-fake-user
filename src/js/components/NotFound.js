import React from 'react';
import Breadcrumbs from "./Breadcrumbs"; 
const NotFound = (props) => {
  console.log(props)
  return (
    <div>
      <Breadcrumbs urlinfo={props.location} />
      Route not Found.
    </div>
  );
};

export default NotFound;