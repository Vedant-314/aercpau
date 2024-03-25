import React from "react";
import Layout from "./Layout";

function ContactUs() {
  return (
    <Layout>
      <div className="contact-container">
        <div className="desc">
          <div className="title">Email:</div>
          <div className="content">
            <h3>Director : jmsinghpau@rediffmail.com</h3>
            <h3>AERC Centre : jmsingh@pau.edu</h3>
          </div>
        </div>
        <div className="desc">
          <div className="title">Telephone/Fax:</div>
          <div className="content">
            <h3>Office :91-161-2407008</h3>
            <h3>Director :91-9872301032</h3>
          </div>
        </div>
        <div className="desc">
          <div className="title">Address:</div>
          <div className="content">
            <h3>
              Prof J. M. Singh, Director Agro - Economic Research Centre Punjab
              Agricultural University Ludhiana - 141004 Punjab, INDIA.
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
