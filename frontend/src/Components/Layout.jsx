import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Layout({ children }) {
  return (
    <>
      <div className="layout-container">
        <p>
          Directorate of Economics and Statistics, Department of Agriculture and
          Cooperation, Ministry of Agriculture and Farmers Welfare, Government
          of India, New Delhi
        </p>
        <div className="header">
          <div className="left">
            <img src={logo} alt="" />
          </div>
          <div className="middle">
            <h1>AGRO ECONOMIC RESEARCH CENTRE</h1>
          </div>
        </div>
        <div className="navbar">
          <ul>
            <Link to={'/'}>
              <li>Home |</li>
            </Link>
            <Link to={'/cpstudies'}>
              <li>Completed Studies |</li>
            </Link>
            <Link to={'/ogstudies'}>
              <li>Ongoing Studies |</li>
            </Link>
            <Link to={'/ourstaff'}>
              <li>Our Staff |</li>
            </Link>
            <Link to={'/media'}>
              <li>Gallery |</li>
            </Link>
            <Link to={'/contactus'}>
              <li>Contact Us |</li>
            </Link>
            <Link to={'/weblinks'}>
              <li>Web Links |</li>
            </Link>
            <Link to={'/uploads'}>
              <li>Uploads</li>
            </Link>
          </ul>
        </div>
        <p>Punjab Agricultural University, India</p>
        <div className="mainbody">
          <div className="m-left">
            <div className="card">
              <div className="title">Sponsered by:</div>
              <hr />
              <div className="content">
                <span>
                  Directorate of Economics and Statistics, Department of
                  Agriculture and Cooperation, Ministry of Agriculture and
                  Farmers Welfare, Government of India, New Delhi
                </span>
              </div>
            </div>
          </div>
          <div className="m-right">{children}</div>
        </div>
        <div className="footer">
            <p>All Rights Reserved © aercpau.com</p>
        </div>
      </div>
    </>
  );
}

export default Layout;
