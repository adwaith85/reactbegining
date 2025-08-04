
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Product(){

    const [name,setName] =useState ()
    const [data,setData] =useState ([])

    const onsubmit=async()=>{
        let link=`https://fakestoreapi.com/products/`
        let res=await fetch(link)
        let data = await res.json()
        setData(data)
        
    }


    useEffect(()=>{
 onsubmit()
    },[])


return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Link to={'/about'} className="nav-link ">ABOUT</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<h2>products: {name} </h2>

<input type="text" onChange={(e) => setName(e.target.value)}></input>
<button onClick={onsubmit} >submit</button>


  <Container fluid>
      <Row className="g-2">
      {
    data.map(item=><Col className="g-4"><Detail title={item.title} price={item.price} image={item.image} id={item.id}/></Col> )
    
}
      </Row>
    </Container>


 
</>

}

function Detail(props){
     return  <Card style={{ width: '300px',height:'100%',backgroundColor:"grey" }}>
      <Card.Img variant="top" src={props.image} height={300} width={300} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          $::{props.price}
        </Card.Text>
        {/* <Button variant="primary" >view more</Button> */}
        <Link to={`/product/${props.id}`}>view more</Link>
      </Card.Body>
    </Card>
}


export default Product

 