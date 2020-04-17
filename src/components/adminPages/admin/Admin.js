import React, { Component } from "react";
import AdminBar from "../common/AdminBar";
import axios from 'axios';


export default class Admin extends Component {
  state = {
    loggedIn: false,
    data:{}
  };
  mySubmit() {
    const name=this.refs.name.value
    const password=this.refs.password.value
    const query=`http://localhost:4000/api/users/adminGet?name=${name}&password=${password}`

   axios.get(query)
    .then(res=>{
      if(res.data==="ok")
      {
        localStorage.setItem("lastname", this.refs.name.value);
        this.props.history.push("/Dashbord");
      }
      
    }).catch(err=>console.log(err))

    
      }

  render() {
    return (
      <div>
        <AdminBar myNavigater={{ link: "/", Name: "Home",logOut:false }} />
        <div className="container">
          <div className="row">
            <div className="offset-md-4 col-md-4 p-5 rounded my-5 bg-dark">
              <h1 className="text-light">Login</h1>
              <div>
                <label className="text-light">User Name</label>
                <div className="form-group">
                  <input
                    type="text"
                    defaultValue="admin"
                    className="form-control"
                    ref="name"
                  />
                </div>

                <label className="text-light">Password</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="admin"
                    ref="password"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.mySubmit()}
                >
                  Submit
                </button>
              </div>
              <div>{}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


