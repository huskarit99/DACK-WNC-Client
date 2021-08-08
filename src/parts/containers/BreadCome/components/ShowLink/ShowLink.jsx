import React from 'react'
import {  useLocation } from "react-router-dom";
import pathEnums from '../../../../../utils/enums/pathEnums';
const ShowLink = () => {
  let location = useLocation();
  return (
    <ul className="breadcome-menu">
      <li><span className="bread-slash">{pathEnums[location.pathname]}</span>
      </li>
    </ul>
  )
}

export default ShowLink
