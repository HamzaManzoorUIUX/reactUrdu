import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import { getIntrest } from "../../../actions/intrestAction";

import { Container, Row, Col } from "react-bootstrap";
import AdminBar from "../common/AdminBar";
import SubIntresting from "./SubIntresting"

class AdminIntresting extends Component {
  componentDidMount() {
    this.props.getIntrest();
  }

  
  render() {
const {intrests}=this.props;
      
    return (
      <div>
        <AdminBar />
        <div className="row">
          <div className="col-md-3 p-5">
          <Link to="/dashbord" className="btn btn-danger">Dashbord</Link>
          </div>
          <div className="offset-md-6 col-md-3 text-right p-5">
          <Link to="/AdminIntresting/AddBooks" className="btn btn-success">
          Add New Book
        </Link>
          </div>
        </div>
        <Container>
          <Row className="myFont">
            <Col md={9}>
              <Row>
                <table className="table table-striped table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Auther</th>
                      <th>Category</th>
                      <th>Semester</th>
                      <th>stars</th>
                      <th>path</th>
                      <th>cover</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {intrests == null ? (
                      <tr>
                        <td colSpan="8">You haven't any book</td>
                      </tr>
                    ) : (
                      intrests.map((item, index) => {
                        return <SubIntresting key={index} ItemData={({i:item,index:index})}/> 
                        return <tr>
                          <td>
                            Hamza
                          </td>
                        </tr>
                      })
                    )}
                  </tbody>
                </table>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

AdminIntresting.propTypes = {
  getIntrest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  intrests: state.myIntrest.intrest
});

export default connect(mapStateToProps, { getIntrest })(AdminIntresting);
