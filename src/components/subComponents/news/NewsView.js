import React from "react";

export default function NewsView(props) {
  return (
    <div>
      <div className="card d-flex flex-row">
        <p className="px-2 pt-2">{props.i.Title}</p>
        <div>
          <img
            className="img-thumbnail p-1"
            src={`${process.env.PUBLIC_URL}/${props.i.path}`}
            alt={props.i.Title}
          />
        </div>
      </div>
    </div>
  );
}
