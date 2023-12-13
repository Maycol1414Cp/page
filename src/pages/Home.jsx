import '../App'
import React from 'react'
import Card from '../components/Card'

function Home() {
  return (
    <div className='cards'>
        <Card 
          title='Historia y Orígenes'
          text='Una narrativa breve pero informativa sobre la fundación del equipo.
          Acontecimientos clave y momentos destacados en la historia del equipo.
          Valores y Filosofía:
          
          Una descripción de los valores fundamentales del equipo.
          La filosofía de juego y los principios que el equipo busca representar.
          Misión y Visión:
          
          La misión a corto y largo plazo del equipo.
          La visión para el futuro y los objetivos que el equipo aspira alcanzar.'
          />
        <Card 
          title='Mision'
          text='Nuestra misión es más que la victoria en el campo de juego. Nos esforzamos por ser un faro de inspiración para la juventud paceña, brindando oportunidades para el desarrollo personal y deportivo. A través del fútbol, buscamos fomentar valores positivos, promover la unidad y contribuir al bienestar de nuestra comunidad.'
          />
        <Card 
          title='Vision'
          text='Como equipo, aspiramos a trascender las fronteras deportivas y convertirnos en embajadores de La Paz ante el mundo. Buscamos construir un legado duradero, no solo con títulos, sino también a través del impacto positivo que tenemos en la vida de las personas. Visualizamos un futuro donde nuestro equipo es reconocido no solo por sus logros en el campo, sino por su contribución al crecimiento y la cohesión de nuestra amada ciudad.
          Esta narrativa representa una base sólida para compartir la historia, los valores y la visión de tu equipo de fútbol, contextualizados en La Paz, Bolivia. Puedes personalizar estos elementos según los detalles específicos y la identidad única de tu equipo.'
          />
    </div>
  )
}
export default Home;
