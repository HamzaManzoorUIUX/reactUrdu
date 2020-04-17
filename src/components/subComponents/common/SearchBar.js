import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="row">
        <div className="form-group col-md-4">
          <input type="text" placeholder="Book Name" className="form-control" ref="bookName" />
        </div>
        <div className="form-group col-md-4">
          <input type="text" placeholder="Author Name" className="form-control" ref="authorName" />
        </div>
        <div className="form-group col-md-4">
          <input type="button" className="btn btn-primary" value="Serach" ref="submit"/>
        </div>
      </div>
    );
  }
}
