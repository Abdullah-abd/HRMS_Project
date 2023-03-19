import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Emp_login from './Emp_login';
import Mngr_login from './Mngr_login';
import Admin_login from './Admin_login';

function Start() {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3 "
      fill
    >
      <Tab eventKey="home" title="Employee">
        <Emp_login/>
      </Tab>
      <Tab eventKey="profile" title="Manager">
      <Mngr_login/>
      </Tab>
      <Tab eventKey="longer-tab" title="Admin">
      <Admin_login/>
      </Tab>
      
    </Tabs>
    </div>
  )
}

export default Start
