import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';



const Payment = ({buyitem ,buytot }) => {
   
    return (
        <div>
            <h3 style={{ color: "sienna" }}>BILL</h3><br />
            <Form>
                <Table striped className="border border-2 border-secondary">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyitem.map((item) => (
                            <tr key={item.Id}>
                                <td>#{item.Id}</td>
                                <td>{item.ProductName}</td>
                                <td>{item.Qty}</td>
                                <td>{item.Price}</td>
                                <td>{(item.Price)*(item.Qty)}₹</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3} style={{ backgroundColor: "sienna", color: "white" }}><h5>GRAND TOTAL :</h5></td>
                            <td style={{ backgroundColor: "sienna", color: "white" }}>{buytot}₹</td>
                        </tr>
                    </tbody>

                </Table><br /><br /><br />
                <h3 style={{ color: "grey" }}>ADDRESS</h3><br />
                <div className="border border-2 border-secondary" style={{backgroundColor:"lightgrey"}}>
                    <Row >
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row><br/>
                    <Button  variant='secondary'>
                        PROCEED PAYMENT
                    </Button><br/><br/><br/>
                </div>
            </Form>
        </div>
    )
}

export default Payment




