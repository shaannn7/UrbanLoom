import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Items } from '../../Items';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';


const Viewproduct = ({ Addcart, handleShow, handleClose , show, Loguser , Buynow}) => {

  const [items, setItems] = useState(Items)
  const { Id } = useParams();
  const viewitem = items.find((item) => item.Id === parseInt(Id))
  
  return (
    <div>
      <div>
        <h3 style={{ color: "silver" }}>{viewitem.ProductName}</h3>
      </div>

      <div>
      <div className='container'>
  <div className='row'>
    {viewitem &&
     <CardGroup className='col-12 col-md-6'>
     <Card className='m-4 mt-2 md-2'>
       <div className="row">
         <div className="col-md-6">
           <Card.Img style={{ maxHeight: "20rem" }} src={viewitem.Image} />
         </div>
         <div className="col-md-6 mt-5">
           <Card.Body>
             <Card.Text>{viewitem.ProductName}</Card.Text>
             <Card.Text>Price: {viewitem.Price}₹</Card.Text>
             <Card.Text>Product Id: {viewitem.Id}</Card.Text>
             <Card.Text>Product Type: {viewitem.type}</Card.Text>
             <Card.Text>Available Pcs: {viewitem.Stock} pcs</Card.Text>
             <Card.Text>Qty: {viewitem.Qty}</Card.Text>
             <span onClick={handleShow}><Button variant='secondary' onClick={() => Addcart(viewitem.Id)}>Add to Cart</Button></span>
             <span><Button className='m-2' variant='secondary' onClick={()=>Buynow(viewitem.Id)}>Buy now</Button></span>
           </Card.Body>
         </div>
       </div>
     </Card>
   </CardGroup>
    }
  </div>
</div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Well done {Loguser.name} ! </Modal.Title>
          </Modal.Header>
          <Modal.Body>You've added the product to your cart successfully</Modal.Body>
          <Modal.Footer >
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default Viewproduct