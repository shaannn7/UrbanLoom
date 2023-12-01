import React from 'react'
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { Mycontext } from '../../../../App';


const Viewusers = ({  valUser }) => {

  const nav = useNavigate()
  const { adminlogin } = useContext(Mycontext)

  const [finduser, setfinduser] = useState({})
 
  const { Id } = useParams()
  let index = Number(Id)
  
  useEffect(() => {
    let user = valUser[index]
    setfinduser(user)
  }, [Id])


  return (
    <div>
      {adminlogin ?
        <>
          <div>
            <h4 style={{ color: "grey" }}> {finduser.email} - Previlage:{finduser.previlage}</h4>
            <h4 style={{ color: "silver" }}>ID : {finduser.Id}</h4>
          </div><br /><br />
          <div className='m-4'>
            <h4 style={{ color: "sienna" }}>ORDER DETAILS</h4>
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Type</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              {
                finduser && finduser.order?.map((x) => (
                  <tbody>
                    <tr>
                      <td>{x.Id}</td>
                      <td>{x.type}</td>
                      <td>{x.ProductName}</td>
                      <td>{x.Price} ₹</td>
                      <td>{x.Qty}</td>
                      <td>{(x.Qty)*(x.Price)} ₹</td>
                    </tr>
                  </tbody>
                )
                )
              }
            </Table><br /><br /><br />
            <h4 style={{ color: "sienna" }}>CART DETAILS</h4>
            <Table striped bordered hover >
              <thead>
                <tr>
                  <th>#ID</th>
                  <th>Type</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              {
                finduser && finduser.cart?.map((x) => (
                  <tbody>
                    <tr>
                      <td>{x.Id}</td>
                      <td>{x.type}</td>
                      <td>{x.ProductName}</td>
                      <td>{x.Price} ₹</td>
                      <td>{x.Qty}</td>
                      <td>{(x.Qty)*(x.Price)} ₹</td>
                    </tr>
                  </tbody>
                )
                )
              }
            </Table>
          </div>
          <div>
          </div>
        </> : <h3 style={{ color: "red" }}>ACCESS DENIED</h3>
      }
    </div>
  )
}

export default Viewusers