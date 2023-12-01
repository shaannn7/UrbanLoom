import React, { useContext } from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaRegUserCircle } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Mycontext } from '../../../../App';



const Users = ({  valUser }) => {

  const { adminlogin } = useContext(Mycontext)

  return (
    <Container>
      {adminlogin ? <>
        <h3 style={{ color: 'sienna', marginTop: '2rem' }}>USERS</h3>
        {
          valUser.map((user, index) => {
            if (user.previlage === "admin") {
              return <></>
            }
            else {
              return (
                <><Link to={`/Viewusers/${index}`} style={{ textDecoration: "none" }}>
                  <Row className='d-flex justify-content-center align-items-center' style={{ marginTop: '2rem' }}>
                    <Col className='d-flex' style={{ backgroundColor: 'sienna', height: '50px', alignItems: 'center', justifyContent: 'space-between', borderRadius: "5px" }}>
                      <div className='d-flex align-items-center'>
                        <FaRegUserCircle style={{ color: 'white', fontSize: '25px', marginTop: '-3px', marginLeft: '15px' }} />
                        <span style={{ fontFamily: 'sans-serif', fontSize: 'larger', color: 'white', fontWeight: '500', marginLeft: '15px' }}>{user.email}</span>
                      </div>
                      <MdOutlineNavigateNext style={{ color: 'white', fontSize: '35px', marginRight: '10px' }} />
                    </Col>
                  </Row></Link>
                </>
              )
            }
          })
        }

      </> : <h3 style={{color:"red"}}>Error 404 : ACCESS DENIED</h3>}
    </Container>
  );
};

export default Users;




