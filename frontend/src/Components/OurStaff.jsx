import React from 'react'
import Layout from './Layout'

function OurStaff() {
  return (
    <Layout>
        <div className="staff-container">
          <div className="title">Faculty</div>
          <ul>
            <li>Dr Jitender Mohan Singh, Director</li>
            <li>Dr Mrs Parminder Kaur, Principal Agricultural Economist</li>
            <li>Dr Mrs. Arjinder Kaur, Principal Agricultural Economist</li>
            <li>Dr Sanjay Kumar, Principal Agricultural Economist</li>
          </ul>
          <div className="title">Technical Staff</div>
          <ul>
            <li>Mr Parminder Singh, Senior Research Investigator</li>
            <li>Mr Satwinder Singh, Senior Research Investigator</li>
            <li>Dr Tejinder Kaur, Senior Research Investigator</li>
          </ul>
        </div>
    </Layout>
  )
}

export default OurStaff