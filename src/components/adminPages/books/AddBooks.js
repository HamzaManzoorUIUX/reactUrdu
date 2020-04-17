import React, { Component } from "react";
import { addBooks } from "../../../actions/booksAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import AdminBar from "../common/AdminBar";
import MyFIle from './MyFIle'

class AddBooks extends Component {
  submitFormToServer() {
    const objBook = {};
    objBook.name = this.refs.userName.value;
    objBook.auther = this.refs.auther.value;
    objBook.categories = this.refs.categories.value;
    objBook.semester = this.refs.semester.value;
    objBook.stars = this.refs.stars.value;
    objBook.path = this.refs.path.value;
    objBook.cover = this.refs.cover.value;
    console.log(objBook);

    this.props.addBooks(objBook);
    alert("data added");
    this.props.history.push("/adminBooks");
  }
  resetAllFIelds() {
    this.refs.userName.value = "";
    this.refs.auther.value = "";
    this.refs.categories.value = "";
    this.refs.semester.value = "";
    this.refs.stars.value = "";
    this.refs.path.value = "";
    this.refs.cover.value = "";
  }
  render() {
    return (
      <div>
        <AdminBar nextAction={{ Link: "/adminBooks", Name: "Back" }} />
        <Container>
          <div className="row">
            <div className="col-md-8">
              <div className="form-group">
                <label>Book Name</label>
                <input type="text" className="form-control" ref="userName" />
              </div>
              <div className="form-group">
                <label>Auther Name</label>
                <input type="text" className="form-control" ref="auther" />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select className="form-control" ref="categories">
                  <option value="funny"> funny</option>
                  <option value="horrer">Horrer</option>
                </select>
              </div>
              <div className="form-group">
                <label>Semester</label>
                <input type="text" className="form-control" ref="semester" />
              </div>
              <div className="form-group">
                <label>Stars</label>
                <input type="text" className="form-control" ref="stars" />
              </div>
              <div className="form-group">
                <label>Path</label>
                <input type="text" className="form-control" ref="path" />
              </div>
              <div className="form-group">
                <label>Cover</label>
                <input type="text" className="form-control" ref="cover" />
                <MyFIle/>
              </div>
              <div className="form-group">
                <input
                  type="button"
                  className="btn btn-danger"
                  defaultValue="Save"
                  onClick={() => this.submitFormToServer()}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

AddBooks.propTypes = {
  addBooks: PropTypes.func.isRequired,
};
export default connect("", { addBooks })(AddBooks);
