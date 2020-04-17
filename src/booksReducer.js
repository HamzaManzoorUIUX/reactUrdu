import React, { Component } from 'react'

export default class booksReducer extends Component {
    state={
        myData:[]
    }
    UNSAFE_componentWillMount(){
        axios
        .get("http://localhost:4000/api/books/getData", {
          username: "admin",
          password: "admin",
        })
        .then(function (response) {
          onChange(response.data)
          
        })
        .catch(function (error) {
          console.log(error);
        });
        var onChange=(e)=>{
          this.setState({myData:e.data})
        }
      console.log("this is redux");
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
