import React from "react";

export default function BooksView(props) {
  const myBook=props.book;
  return (
    <div className="card col-md-4" >
      <img className="card-img-top" src={myBook.cover} alt={myBook.name} />
      <div className="card-body">
        <h5 className="card-title">
            {
                myBook.name
            }
        </h5>
        <p className="card-text">
        Categories: {myBook.Categories}
        </p>
        <a href="!#" className="btn btn-primary">
          view More
        </a>
      </div>
    </div>
  );
}
