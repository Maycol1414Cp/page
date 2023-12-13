import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const MyForm = () => {
    const [age, setAge] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (age >= 6 && age <= 16) {
            setAuthenticated(true);
            console.log('registro satisfactorio, muy pronto te enviaremos un correo');
        } else {
            setAuthenticated(false);
            alert('Lo sentimos, no cumples con la edad requerida');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Direccion de correo</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formAge">
                <Form.Label>Edad (debes tener entre 6 y 16 anios)</Form.Label>
                <Form.Control type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            {authenticated && <p>Authenticated!</p>}
        </Form>
    );
};

export default MyForm;
