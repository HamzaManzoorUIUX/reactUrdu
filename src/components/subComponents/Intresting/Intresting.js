import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import NavBar from './NavBar';
// import NewsModel from './NewsModel';

// import Adds from "../common/Adds";
import { Container } from "react-bootstrap";
// import Footer from './Footer';
// import SearchBar from './SearchBar'


function Intresting(props) {

  var myTableData;
  myTableData =
    props.myNews.length <= 0 ? (
      <h1>Empty</h1>
    ) : (
      props.myNews.map(i => {
        return (
            <div className="col-md-6 py-2" key={i.id}>
          {/* <NewsModel i={i}/> */}
          </div>
        );
      })
    );
  return (
<div>
{/* <NavBar/> */}
<Container>
      <h1 className="text-center mt-4">
      دلچسپ خبریں
      </h1>
      {/* <SearchBar/> */}

      <div className="row">
        <div className="col-md-9  my-4">
          <div className="border p-4">
            <div>
              <div className="row">
              {myTableData}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-4">
          {/* <Adds /> */}
        </div>
      </div>
    </Container>
    {/* <Footer/> */}
</div>
  );
}

const mapStateToProps = state => {
  return {
    myNews: state.myIntrestNews
  };
};

export default connect(mapStateToProps)(Intresting);