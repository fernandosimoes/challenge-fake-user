import React from 'react';
import Breadcrumbs from "./Breadcrumbs";
import {Link} from 'react-router-dom'
const NotFound = (props) => {
  console.log(props)
  return (
    <div>
      <Breadcrumbs urlinfo={props.location} />
      <div className="notfound">
        Route not Found.
        <Link to='/'>Back</Link>
      </div>
    </div>
  );
};

export default NotFound;