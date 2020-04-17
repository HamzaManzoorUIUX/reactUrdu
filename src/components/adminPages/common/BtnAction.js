import React, { Component } from 'react'
import { Link} from "react-router-dom";
// import { connect } from "react-redux";

export default class BackBtn extends Component {
    render() {

        return (
            <div>
                <Link to={
                    this.props.myNavigater.Link
                } className="btn btn-danger">{
                    this.props.myNavigater.Name
                }</Link>
            </div>
        )
    }
}
// const mapStateToProps = state => {
//     return {
//         myNavigater: state.myNavigater
//     };
//   };
  
//   export default connect(mapStateToProps)(BackBtn);