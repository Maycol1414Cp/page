import React from 'react';
import Card from 'react-bootstrap/Card';

function card(props) {
  return (
    <Card  className='card'style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../assets/images/${props.title}.jpg`)} />
      <Card.Body  data-bs-theme="dark">
        <Card.Title ><strong>{props.title}:</strong></Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default card;