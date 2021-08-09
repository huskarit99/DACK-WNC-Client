import React from 'react'
import SearchCourse from './components/SearchCourse/SearchCourse'
import Sort from './components/Sort/Sort'
import { useRecoilValue } from "recoil";
import roleState from "../../../state/roleState";
import {  useLocation } from "react-router-dom";
import ShowLink from './components/ShowLink/ShowLink';

const BreadCome = () => {
  const location = useLocation();
  const role= useRecoilValue(roleState);
  return (
    <div className="header-advance-area">
      <div className="breadcome-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="breadcome-list">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  {role && role!=='teacher' && role!=='admin' &&
                    <SearchCourse />}
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                  {role && role!=='teacher' && role!=='admin' && location.pathname.includes("/courses/search") &&
                    <Sort/>}
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <ShowLink />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCome
