import React from "react";

const Footer = () => {
  return (
    <footer className="mainfooter" role="contentinfo" style={{minHeight:"100vh"}}>
      <hr />
      <div className="footer-middle">
        <div className="container">
          <div className="row mb-3 mx-auto d-flex justify-content-center">
            <div className="row footer-pad mr-1">
              <div className="col-4 ">
                <a href="/about">About</a>
              </div>
              <div className="col-4 ">
                <a href="/termsandconditions">T&C</a>
              </div>
              <div className="col-4">
                <a href="/">Contact</a>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="text-center font-italic text-light">
          {" "}
          projectstack.dev@gmail.com
        </p> */}
        <div className="row">
          <div className="col-md-12 copy">
            <p className="text-center text-white">
              &copy; Copyright 2021 - Collab. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
