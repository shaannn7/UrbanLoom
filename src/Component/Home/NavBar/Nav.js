import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas'
import './Nav.css'
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaRegCircleUser } from "react-icons/fa6";




function NavBar({ Logout, Loguser , ifLogin , searchpro ,setsearch}) {

    
   

 
   
   
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="NavBar mb-3" style={{ zIndex: '2', marginTop: "-10px", marginBottom: "0px", alignContent: "center" }} >
          <Container fluid>
            <Navbar.Brand href="/" >
              <Link to={'/'}>
                <img className='Logo' src={require('./Logo/LogoF.png')} alt='Logo' />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={require('./Logo/LogoF.png')} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">


                <div style={{ position: 'relative', top: '3px' }}>
                  <DropdownButton id="dropdown-basic-button" title="CATEGORIES" className='noborderbutton'>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Seating'}><h5>Seating</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Bedroom'}><h5>Bedroom</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Dinning'}><h5>Dinning</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Entertainment'}><h5>Entertainment</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Kids'}><h5>Kids</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Office'}><h5>Office</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Outdoor'}><h5>Outdoor</h5></Link></Dropdown.Item>
                    <Dropdown.Item style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Storage'}><h5>Storage</h5></Link></Dropdown.Item>
                  </DropdownButton>
                </div>

                  <Nav.Link href=""><Link className='NavPages' to={'/'}><h4>HOME</h4></Link></Nav.Link>
                  <Nav.Link href=""><Link className='NavPages' to={'/Shop'}><h4>SHOP</h4></Link></Nav.Link>
                  <Nav.Link href=""><Link className='NavPages' to={'/Cart'}><h4>CART</h4></Link></Nav.Link>
                


                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="searchspace me-2"
                      aria-label="Search"
                      onChange={(e)=>setsearch(e.target.value)}
                    />
                    <Button variant='secondary' className='Search' onClick={searchpro}>Search</Button>
                  </Form>

                  <Nav.Link href=""><Link className='NavPages'>
                    <DropdownButton id="dropdown-basic-button" title={<FaRegCircleUser style={{ fontSize: '24px' }} />} className='noborderbutton'  >
                      <h6 style={{ textAlign: "start", marginLeft: "5px" , color:"gray" }}>{Loguser.name}</h6>
                      {
                        ifLogin ?  <Dropdown.Item href="#/action-2" style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/'} onClick={Logout}><h5>LOGOUT</h5></Link></Dropdown.Item> : <Dropdown.Item href="#/action-1" style={{ backgroundColor: 'inherit' }}><Link className='NavPages' to={'/Login'}><h5>LOGIN</h5></Link></Dropdown.Item>

                      }
                     
                    </DropdownButton>
                  </Link></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;