import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { Mycontext } from '../../../../../App';
import { IoChevronBackCircleOutline } from "react-icons/io5";


const Viewoutdoor = ({ nav }) => {
  const {item , setItem} = useContext(Mycontext)
  const OutdoorItems = item.filter((item) => item.type === 'Outdoor');
  return (
    <div>
  
      <div>
      <IoChevronBackCircleOutline onClick={() => nav('/Products')} />
        <h3 style={{ color: "sienna" }}>OUTDOOR</h3>
        <div className='container'>
          <div className='row'>
            {
              OutdoorItems.map((item) => (
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
    </div>
  )
}

export default Viewoutdoor