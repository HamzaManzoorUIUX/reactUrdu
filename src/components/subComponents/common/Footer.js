import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div>
<footer className="page-footer text-light bg-dark pt-4">

  <div className="container text-center text-md-left">

    <div className="row">

      <div className="col-md-4 mx-auto">

        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-8 mx-auto">
      <iframe title="uniMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27241.06208487526!2d73.07556975776542!3d31.410468109974953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d4b6af719e5%3A0xd3e9c280ae059e59!2sGovernment%20Postgraduate%20College%20Samanabad%20Faisalabad!5e0!3m2!1sen!2s!4v1585171873099!5m2!1sen!2s" width="600" height="450" aria-hidden="false"></iframe>
        

      </div>

    
    </div>

  </div>

  <hr/>

  <ul className="list-unstyled list-inline text-center py-2">
    <li className="list-inline-item">
      <h5 className="mb-1">Register for free</h5>
    </li>
    <li className="list-inline-item">
      <Link to="/admin" className="btn btn-danger btn-rounded">Sign up!</Link>
    </li>
  </ul>

  <hr/>
 <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <Link to="/" className="text-light"> UrduCorner.com</Link>
  </div>

</footer>
        </div>
    )
}
