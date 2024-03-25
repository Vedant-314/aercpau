import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'

function WebLinks() {
  return (
    <Layout>
      <h2>Web Links: </h2>
      <hr />
      <div className="cmp-content">
        <ul>
          <Link to={"https://eands.da.gov.in/"} ><li>DES & DA &FW - eands.dacnet.nic.in</li></Link>
          <Link to={"https://www.nabard.org/"} ><li>NABARD - nabard.org</li></Link>
          <Link to={"https://www.niti.gov.in/"}><li>NITIAayog - niti.gov.in</li></Link>
        </ul>
      </div>
    </Layout>
  )
}

export default WebLinks