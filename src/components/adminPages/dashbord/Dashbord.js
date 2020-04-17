import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminBar from "../common/AdminBar";

export default class Dashbord extends Component {
 
  render() {
    return (
      <div>
        
        <AdminBar myNavigater={{ link: "/Admin", Name: "Admin" }} />
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
            <Link to="adminBooks">
              <div className="p-3 rounded-top border">
                <div className="py-3 text-center bg-primary">
                  <i className="text-light fas fa-book icon-100"></i>
                </div>
                <div className="bg-light text-center">
                  Books
                </div>
              </div>
              </Link>
            </div>
            <div className="col-md-4 ">
            <Link to="adminIntresting">
              <div className="p-3 rounded-top border">
                <div className="py-3 text-center bg-primary">
                  <i className="fas fa-book icon-100"></i>
                </div>
                <div className="bg-light text-center">hamza</div>
              </div>
           </Link>
            </div>
            <div className="col-md-4 ">
              <div className="p-3 rounded-top border">
                <div className="py-3 text-center bg-primary">
                  <i className="fas fa-book icon-100"></i>
                </div>
                <div className="bg-light text-center">hamza</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
