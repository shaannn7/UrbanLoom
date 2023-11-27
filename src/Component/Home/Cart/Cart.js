import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useNavigate } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import Login from '../../User/Login';







const Cart = ({ cart, setCart, ifLogin ,Loguser , Buynow}) => {

    const nav = useNavigate()


    const QtyCountinc = (id) => {
        const newItem = cart.map((x) => x.Id === id ? { ...x, Qty: x.Qty + 1, Total: (x.Qty + 1) * (x.Price) } : x)
        setCart(newItem)
    }


    const QtyDlt = (id) => {
        const newCart = cart.filter((x) => x.Id !== id);
        setCart(newCart);
    };


    const QtyCountdec = (id) => {
        const newItem = cart.map((x) => {
            if (x.Id === id) {
                const newQty = Math.max(1, x.Qty - 1);
                return { ...x, Qty: newQty, Total: newQty * x.Price };
            } else {
                return x;
            }
        });

        setCart(newItem);
    };



    return (
        <>
            {
                ifLogin ? (
                    <div>
                        <h3 style={{ color: "silver" }}>CART</h3>
                        <div className='container'>
                            <div className='row'>
                                {cart.map((item) =>
                                    <CardGroup className='col-6 col-md-3'>
                                        <Card className='m-2 mt-4 md-3'>
                                            <Card.Img style={{ maxHeight: "10rem" }} src={item.Image} />
                                            <Card.Body>
                                                <Card.Title>{item.ProductName}</Card.Title>
                                                <Card.Text>Price:{item.Price}₹</Card.Text>
                                                <Card.Text>Qty:{item.Qty}</Card.Text>
                                                <Card.Text>Total :{item.Total} </Card.Text>
                                                <Button variant='secondary' className='m-1' onClick={() => QtyCountinc(item.Id)} >Qty +</Button>
                                                <Button variant='secondary' className='m-1' onClick={() => QtyDlt(item.Id)}><MdDeleteOutline /></Button>
                                                <Button variant='secondary' onClick={() => QtyCountdec(item.Id)} >Qty -</Button>
                                            </Card.Body>
                                        </Card>
                                    </CardGroup>
                                )}
                            </div>
                        </div><br />
                       
                        <Button variant='secondary' className='m-2' onClick={() => Buynow()}>Place order</Button>
                    </div>
                ) : <Login Loguser={Loguser} />
            }
        </>

    )

}

export default Cart