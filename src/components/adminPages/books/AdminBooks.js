import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBooks } from "../../../actions/booksAction";

import { Container, Row, Col } from "react-bootstrap";
import AdminBar from "./../common/AdminBar";
import SubBook from "./SubBooks"

class AdminBooks extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  
  render() {
const {books}=this.props;
      
    return (
      <div>
                <AdminBar nextAction={{ Link: "/adminBooks/addBooks", Name: "Add New Book" }}  />

        <Container>
        <table className="table table-striped table-bordered table-hover">
                  <thead className="text-light bg-dark">
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
                    {books == null ? (
                      <tr>
                        <td colSpan="8">You haven't any book</td>
                      </tr>
                    ) : (
                      books.map((item, index) => {
                        return <SubBook key={index} ItemData={({i:item,index:index})}/> 
                      })
                    )}
                  </tbody>
                </table>
        </Container>
      </div>
    );
  }
}

AdminBooks.propTypes = {
  getBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.myBooks.books
});

export default connect(mapStateToProps, { getBooks })(AdminBooks);
