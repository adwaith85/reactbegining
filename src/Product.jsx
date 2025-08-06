import { useContext, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CartContext } from "./CarProvider"; // Make sure this filename is correct: 'CarProvider' vs 'CartProvider'

function Product() {
    const [name, setName] = useState("");
    const [data, setData] = useState([]);

    const { cartItems, setCartItems } = useContext(CartContext);

    // Fetch product data
    const onsubmit = async () => {
        const link = `https://fakestoreapi.com/products/`;
        const res = await fetch(link);
        const result = await res.json();
        setData(result);
    };

    // Add item to cart
    const addItem = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    // Optional: Filter data by title (case-insensitive substring match)
    const filterData = () => {
        const value = name.toLowerCase();
        const newData = data.filter(item =>
            item.title.toLowerCase().includes(value)
        );
        setData(newData);
    };

    // Fetch data on mount
    useEffect(() => {
        const t = setTimeout(() => onsubmit(), 500)
    
        return () => clearTimeout(t)
      }, [name])

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Link to={'/cart'} className="nav-link">Cart</Link>
                            <Link to={'/about'} className="nav-link">About</Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="my-3">
                <h2>Products: {name}</h2>
                <input
                    type="text"
                    placeholder="Search product title"
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={filterData}>Submit</button>
            </Container>

            <Container fluid>
                <Row className="g-2">
                    {data.map(item => (
                        <Col key={item.id} className="g-4">
                            <Detail
                                addItem={addItem}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                id={item.id}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

function Detail(props) {
    const item = {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price
    };

    return (
        <Card style={{ width: '300px', height: '100%', backgroundColor: "grey" }}>
            <Card.Img variant="top" src={props.image} height={300} width={300} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    $::{props.price}
                </Card.Text>
                <Link to={`/product/${props.id}`}>View More</Link><br />
                <button onClick={() => props.addItem(item)}>ADD TO CART</button>
            </Card.Body>
        </Card>
    );
}

export default Product;
