import React from 'react'
import MyModel from "./MyModel";

export default function CardView(props) {
    return (
            <div className="card" >
              <img className="card-img-top" src={`${process.env.PUBLIC_URL}/${props.i.path}`} alt="Card" />
              <div className="card-body">
                <h4 className="card-title">{props.i.Title}</h4>
                <p className="card-text">by {props.i.auther}</p>
                <MyModel bookData={props.i}/>
              </div>
          </div>
    )
}
