import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Mycontext } from '../../../../App';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiTwotoneDelete } from "react-icons/ai";



const Productview = () => {


    const nav = useNavigate()
    const { item, setItem } = useContext(Mycontext)
    const { Id } = useParams();
    const viewitem = item.find((item) => item.Id === parseInt(Id))


    const RemoveItem = () => {
        const Itemdlt = item.filter((item) => item.Id !== viewitem.Id && item.ProductName !== viewitem.ProductName)
        setItem(Itemdlt)
        nav('/Products')
    }


    const [Productname, setProductname] = useState("")
    const [Price, setPrice] = useState(0)
    const [Stock, setStock] = useState(0)
    const [Image, setImage] = useState("")



    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };


    const Updateproduct = () => {
        let Editproduct = item.map((value) => {
            if (value.Id === viewitem.Id) {
                return { ...value, ProductName: Productname || value.ProductName, Price: Price || value.Price, Stock: Stock || value.Stock, Image: Image || value.Image }
            }
            return value
        })
        setItem(Editproduct)
        nav('/Products')
    }






    return (
        <div>

            <div>
                <IoChevronBackCircleOutline onClick={() => nav('/Products')} />
                <h3 style={{ color: "sienna" }}>{viewitem.ProductName}</h3>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    {viewitem && <>
                        <div className='col-12 col-md-6 d-flex' style={{justifyContent:"center",alignItems:"center"}}>
                            <img src={Image || viewitem.Image} style={{width:"500px" , height:"400px"}} className='img-fluid'/>
                        </div>
                        <div className='col-12 col-md-6' >
                            <CardGroup  >
                                <Card >
                                    <Form className='signup-form border border-2' onSubmit={(e) => e.preventDefault()} style={{ padding: "30px", borderColor: "sienna" }} >
                                        <Form.Group className="mb-3" style={{ backgroundColor: "white", color: "sienna" }}>
                                            <Form.Label >EDIT PRODUCT NAME</Form.Label>
                                            <Form.Control type="text" defaultValue={viewitem.ProductName} onChange={(e) => setProductname(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" style={{ backgroundColor: "white", color: "sienna" }}>
                                            <Form.Label className='login-label'>CHANGE PRICE</Form.Label>
                                            <Form.Control type="text" defaultValue={viewitem.Price} onChange={(e) => setPrice(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ backgroundColor: "white", color: "sienna" }}>
                                            <Form.Label>UPDATE STOCK</Form.Label>
                                            <Form.Control type="textarea" defaultValue={viewitem.Stock} onChange={(e) => setStock(e.target.value)} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" style={{ backgroundColor: "white", color: "sienna" }}>
                                            <Form.Label>CHANGE IMAGE</Form.Label>
                                            <Form.Control type="file" onChange={handleImageChange} />
                                        </Form.Group>

                                        <Button onClick={Updateproduct} className='mb-3' type="submit" style={{ width: '50%', margin: "2px", textDecoration: "none", backgroundColor: "sienna", color: "white", border: "none" }}>
                                            UPDATE
                                        </Button>
                                        <Button style={{ marginTop: "-13px", textDecoration: "none", backgroundColor: "sienna", color: "white", border: "none" }}> <AiTwotoneDelete onClick={RemoveItem} /></Button>

                                    </Form>

                                </Card>

                            </CardGroup>
                        </div>
                    </>
                    }

                </div>
            </div>
        </div>
    )
}

export default Productview