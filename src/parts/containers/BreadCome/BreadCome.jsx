import React from 'react'

const BreadCome = () => {
    return (
        <div className="breadcome-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcome-list">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <div className="breadcome-heading">
                                        <form role="search" className="sr-input-func">
                                            <input type="text" placeholder="Search..." className="search-int form-control" />
                                            <a href="#"><i className="fa fa-search"></i></a>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <ul className="breadcome-menu">
                                        <li><a href="#">Home</a> <span className="bread-slash">/</span>
                                        </li>
                                        <li><span className="bread-blod">Dashboard V.1</span>
                                        </li>
                                    </ul>
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
