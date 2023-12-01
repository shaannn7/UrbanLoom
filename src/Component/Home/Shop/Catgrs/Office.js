import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';
import { Mycontext } from '../../../../App';


const Office = ({ nav }) => {
    const {item , setItem} = useContext(Mycontext)
    const OfficeItems = item.filter((item) => item.type === 'Office' );

return (
        <div>
            <h3 style={{ color: "silver" }}>OFFICE</h3>
            <div className='container'>
                <div className='row'>
                    {
                        OfficeItems.map((item) => (
                            <CardGroup className='col-6 col-md-3'>
                                <Card className='m-2 mt-4 md-3'>
                                    <Card.Img style={{ maxHeight: "12rem" }} src={item.Image} />
                                    <Card.Body>
                                        <Card.Text>{item.ProductName}</Card.Text>
                                        <Card.Text>Price:{item.Price}₹</Card.Text>
                                        <Button variant='secondary' style={{margin:"2px"}} onClick={() => nav(`/Viewproduct/${item.Id}`)}>View Product</Button>
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

export default Office