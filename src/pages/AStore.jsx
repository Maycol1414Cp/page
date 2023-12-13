import React from 'react'
import Card from '../components/Card'
import './Style.css';

function AStore() {
  return (
    <div className='containerStore'>
        <Card 
        title='Camiseta'
        text='La camiseta oficial del equipo, diseñada con los colores distintivos (rojo, verde y gris) y el escudo único de FutbolerosClub. Fabricada con materiales de alta calidad para brindar comodidad y durabilidad  Precio: $50.00 USD'/>
        <Card
        title='Bufanda'
        text="Una bufanda exclusiva de edición limitada, perfecta para mostrar tu apoyo en cada partido. Con detalles bordados del escudo y los colores del equipo. Ideal para mantener el calor y el estilo durante los encuentros.  Agotado"
        />
        <Card
        title='Balon'
        text=" Un balón de fútbol oficial autografiado por los jugadores destacados de FutbolerosClub. Cada balón lleva las firmas de los héroes en el campo, convirtiéndolo en una pieza de colección única para los fanáticos apasionados. <br> Precio: $100.00 USD"
        />
    </div>
  );
}
export default AStore;