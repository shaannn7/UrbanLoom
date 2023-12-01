import React, { useState } from 'react'
import { FormCheck, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackCircleOutline } from "react-icons/io5";


const Addproduct = ({ setItem, item }) => {


    const nav = useNavigate()

    const [Productname, setProductname] = useState("")
    const [Price, setPrice] = useState(0)
    const [Type, setType] = useState("")
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


    const Addproducttt = () => {
        if (Productname.length === 0 || Price.length === 0 || Type.length === 0 || Stock.length === 0 || Image.length === 0) {
            alert("Please complete all require fields before adding the product")
        }
        else {
            setItem([
                ...item, {
                    Id: item.length + 1,
                    ProductName: Productname,
                    Price: Price,
                    Image: Image,
                    type: Type,
                    Stock: Stock,
                    Qty: '1'
                }
            ])
            nav('/Products')
        }
    }





    return (
        <div>
            <IoChevronBackCircleOutline onClick={() => nav('/Products')} />
            <h3 style={{ color: "sienna" }}>ADD PRODUCT</h3>
            <div className='d-flex' style={{ justifyContent: "center", marginTop: "20px" }}>
                <Form className='signup-form border border-2' onSubmit={(e) => e.preventDefault()} style={{ padding: "30px", borderColor: "sienna" }} >

                    <Form.Group className="mb-3" style={{ backgroundColor: "white", color: "sienna" }}>
                        <Form.Label >PRODUCT NAME</Form.Label>
                        <Form.Control type="text" onChange={(e) => setProductname(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ backgroundColor: "white", color: "sienna" }}>
                        <Form.Label className='login-label'>PRICE</Form.Label>
                        <Form.Control type="text" onChange={(e) => setPrice(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ backgroundColor: "white", color: "sienna" }}>
                        <Form.Label className='login-label'>TYPE</Form.Label>
                        <Form.Group controlId="formRadio">
                            <span className='d-flex'>
                                <FormCheck type='radio' variant="secondary" name="catgry" value="Bedroom" onChange={(e) => setType(e.target.value)} style={{color: "sienna",borderColor: "sienna",'&:checked': { borderColor: "sienna", backgroundColor: "sienna"},}}/>
                                <FormLabel>Bedroom</FormLabel>
                                <FormCheck type='radio' name="catgry" value="Dinning" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Dinning</FormLabel>
                            </span>
                            <span className='d-flex'>
                                <FormCheck type='radio' name="catgry" value="Seating" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Seating</FormLabel>
                                <FormCheck type='radio' name="catgry" value="Childern" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Kids</FormLabel>
                            </span>
                            <span className='d-flex'>
                                <FormCheck type='radio' name="catgry" value="Office" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Office</FormLabel>
                                <FormCheck type='radio' name="catgry" value="Storage" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Storage</FormLabel>
                            </span>
                            <span className='d-flex'>
                                <FormCheck type='radio' name="catgry" value="Couches" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Couches</FormLabel>
                                <FormCheck type='radio' name="catgry" value="Outdoor" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Outdoor</FormLabel>
                            </span>
                            <span className='d-flex'>
                                <FormCheck type='radio' name="catgry" value="Mirrors" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Mirrors</FormLabel>
                                <FormCheck type='radio' name="catgry" value="Lights" onChange={(e) => setType(e.target.value)} />
                                <FormLabel>Lights</FormLabel>
                            </span>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ backgroundColor: "white", color: "sienna" }}>
                        <Form.Label>STOCK</Form.Label>
                        <Form.Control type="textarea" onChange={(e) => setStock(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" style={{ backgroundColor: "white", color: "sienna" }}>
                        <Form.Label>UPLOAD IMAGE</Form.Label>
                        <Form.Control type="file" onChange={handleImageChange} />
                    </Form.Group>

                    <Button onClick={Addproducttt} className='mb-3' type="submit" style={{ width: '50%', margin: "2px", textDecoration: "none", backgroundColor: "sienna", color: "white", border: "none" }}>
                        ADD PRODUCT
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Addproduct