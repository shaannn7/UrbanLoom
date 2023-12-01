import React, { useContext } from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Mycontext } from '../../../../../App';
import { IoChevronBackCircleOutline } from "react-icons/io5";


const Viewdinning = ({ nav }) => {
  const { item, setItem } = useContext(Mycontext)
  const Dinningitems = item.filter((item) => item.type === 'Dinning');
  return (
    <div>
      <IoChevronBackCircleOutline onClick={() => nav('/Products')} />

      <h3 style={{ color: "sienna" }}>DINNING</h3>
      <div className='container'>
        <div className='row'>
          {
            Dinningitems.map((item) => (
              <CardGroup className='col-6 col-md-3'>
                <Card className='m-2 mt-4 md-3'>
                  <Card.Img style={{ maxHeight: "12rem" }} src={item.Image} />
                  <Card.Body>
                    <Card.Text>{item.ProductName}</Card.Text>
                    <Card.Text>Price:{item.Price}₹</Card.Text>
                    <Button style={{ margin: "2px", textDecoration: "none", backgroundColor: "sienna", color: "white", border: "none" }} onClick={() => nav(`/Productview/${item.Id}`)}>View Product</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Viewdinning