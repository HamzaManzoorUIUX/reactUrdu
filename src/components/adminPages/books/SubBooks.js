import React from 'react'
import { deleteBooks } from "../../../actions/booksAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class SubBooks extends React.Component{
  deleteData=(id)=> {
    console.log(id);
    
    this.props.deleteBooks(id)
  }
  render(){
      const i=this.props.ItemData.i;
      const index=this.props.ItemData.index;
      
      return (
        <tr key={i.id}>
          <td>{index + 1}</td>
          <td>{i.name}</td>
          <td>{i.auther}</td>
          <td>{i.Categories}</td>
          <td>{i.semester}</td>
          <td>{i.stars}</td>
          <td>{i.path}</td>
          <td>{i.cover}</td>
          <td onClick={()=>{this.deleteData(i.id)}}>delete</td>
        </tr>
        
      )
    }
}
SubBooks.propTypes = {
  deleteBooks: PropTypes.func.isRequired,
};
export default connect("", { deleteBooks })(SubBooks);
