import React from 'react';
import { Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';


const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Classificados</Navbar.Brand>
            <Nav className="mr-auto">
                
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Login</Nav.Link>
      <Nav.Link href="#pricing">Cadastrar</Nav.Link>
         </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
    )
}

export default Menu