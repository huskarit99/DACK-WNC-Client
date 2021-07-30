import React from 'react'
import pathEnums from '../../../utils/enums/pathEnums';
import {  useLocation } from "react-router-dom";

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
