import React from 'react'
import Toasts from './Toasts'
function Section(){ return (
    <div className="section">
    <Toasts
    title='Ultimo partido'

    date='1 de diciembre de 2023'
    text='El equipo mostró una actuación impecable, asegurando la victoria con un marcador de 3-1.
    Resumen del Partido: Desde el pitido inicial, el equipo dominó el campo con jugadas estratégicas y goles impresionantes. "Juan Pérez" anotó dos goles cruciales, mientras que la defensa se destacó en la contención del ataque rival. El único gol en contra se compensó con una jugada magistral de "Ana Gómez". ¡Un partido inolvidable!'/>
    <Toasts
    title='Noticias del Equipo'
    date='2 de diciembre de 2023'
    text='Después de meses de arduo trabajo en la rehabilitación, "Alex Valdez" ha regresado al equipo con más determinación que nunca. Su presencia fortalecerá nuestra delantera y añadirá experiencia valiosa al grupo.'
    />
    <Toasts
    title='Entrevistas Exclusivas'
    date='3 de diciembre de 2023'
    text='"Miguel García" compartió en una entrevista exclusiva su perspectiva sobre la temporada actual. Destacó la cohesión del equipo y la importancia de mantenerse enfocados en los objetivos a largo plazo. "Estamos construyendo algo especial aquí", afirmó el entrenador.'
    />
    </div>
  )
}
export default Section;