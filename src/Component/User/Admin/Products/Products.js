import React from 'react'
import { useContext } from 'react'
import { Card, CardGroup, Button } from 'react-bootstrap'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Mycontext } from '../../../../App'
import { IoChevronBackCircleOutline } from "react-icons/io5";


const Products = ({ nav }) => {


    const { item, setItem } = useContext(Mycontext)


    return (
        <div>
            <IoChevronBackCircleOutline onClick={()=>nav('/Admin')}/>
            <h3 style={{ color: "sienna ", marginTop: "15px" }}>PRODUCTS</h3>
            <div className='row' style={{ position: 'relative', top: '3px' }}>
                <div className='col-6'>
                <Button  onClick={() => nav('/Addproduct')} style={{textDecoration:"none" ,backgroundColor:"white" , color:"sienna" , borderColor:"sienna" }}>ADD PRODUCT</Button>
                </div>
                <div className='col-6'>
                <DropdownButton id="dropdown-basic-button" title="CATEGORIES" className='noborderbutton'>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewseating'}><h5>Seating</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewbedroom'}><h5>Bedroom</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewdinning'}><h5>Dinning</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewkids'}><h5>Kids</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewcouches'}><h5>Couches</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewlights'}><h5>Lights</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewmirrors'}><h5>Mirrors</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewoffice'}><h5>Office</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewoutdoor'}><h5>Outdoor</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Viewstorage'}><h5>Storage</h5></Link></Dropdown.Item>
                </DropdownButton>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        item.map((item) => (
                            <CardGroup key={item.Id} className='col-6 col-md-3'>
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

export default Products