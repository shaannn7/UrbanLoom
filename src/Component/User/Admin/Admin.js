import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Mycontext } from '../../../App';


const Admin = () => {
  const nav = useNavigate()

  const { adminlogin } = useContext(Mycontext)


  return (
    <div>
      {adminlogin ?
        <>
          <h3 style={{ color: "sienna", marginTop: "0px" }}>Hello , Admin </h3>
          <div className='row  d-flex ' style={{ color: "sienna", justifyContent: "center" }}>
            <h3 className='col-5  mt-2 me-5'>PRODUCTS</h3>
            <h3 className='col-5  mt-2 ms-5'>USERS</h3>
          </div>
          <div className='row ' style={{ color: "sienna" }}>
            <Button className='col' style={{ textDecoration: "none", backgroundColor: "white", color: "sienna", fontSize: "20px", fontWeight: "1000px", borderColor: "sienna" }} onClick={() => nav('/Products')}>Click here to access product list</Button>
            <Button className='col' style={{ textDecoration: "none", backgroundColor: "white", color: "sienna", fontSize: "20px", fontWeight: "1000px", borderColor: "sienna" }} onClick={() => nav('/Users')}>Click here to check user deatils</Button>
          </div>
        </> : <h3 style={{ color: "red" }}>ACCESS DENIED</h3>
      }
    </div>
  )
}

export default Admin