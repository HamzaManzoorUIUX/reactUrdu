import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBooks } from "../../../actions/booksAction";

import BooksView from './BooksView'
import {Container, Row, Col  } from 'react-bootstrap';
// import NavBar from './NavBar';
import Adds from '../common/Adds';

class Books extends Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <Container>
    <Row className="myFont">
      <Col md={9}>
      <Row>
      {
        this.props.books == null ? (
          <div>You haven't any book</div>
        ) : (
          this.props.books.map((item) => {
            return <BooksView key={item.id} book={item}/>
          })
        )
        }
      </Row>
      </Col>
      <Col md={3}>
        <Adds/>
      </Col>
    </Row>
  </Container>
      
      </div>
    )
  }
}

Books.propTypes = {
  getBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.myBooks.books.data,
});

export default connect(mapStateToProps, { getBooks })(Books);
