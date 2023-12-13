
import React from 'react';
import { Sponsors } from '../components/Sponsors';
import './Style.css';
import Button from 'react-bootstrap/Button';
import MyForm from '../components/Form';


export function InfoAcademy(){

  return (
    <div className='containerLeft'>
      <h2>Academia de Fútbol de FutbolerosClub</h2>
      <p>Bienvenido a la academia de fútbol de FutbolerosClub, donde cultivamos talento y pasión por el fútbol desde las bases. Nuestra academia es un espacio dedicado al desarrollo integral de jóvenes talentos, brindando oportunidades para aprender, crecer y soñar en grande.</p>
      <h2>Objetivos de la Academia</h2>
      <p>Nuestra academia tiene como objetivos:</p>
      <ul>
          <li>Fomentar el amor por el fútbol desde temprana edad.</li>
          <li>Desarrollar habilidades técnicas y tácticas de forma progresiva.</li>
          <li>Inculcar valores como el trabajo en equipo, la disciplina y el respeto.</li>
          <li>Identificar y nutrir talentos para el futuro del club.</li>
      </ul>
      <h2>Programas y Categorías</h2>
      <p>Ofrecemos programas adaptados a diferentes edades y niveles de habilidad:</p>
      <ul>
          <li>Escuela de Fútbol (6-12 años)</li>
          <li>Categoría Juvenil (13-16 años)</li>
          <li>Programa de Desarrollo Élite (selección por talento)</li>
      </ul>
      <h2>Instalaciones</h2>
      <p>Nuestras instalaciones están diseñadas para proporcionar un entorno propicio para el aprendizaje y la práctica del fútbol:</p>
      <ul>
          <li>Canchas de entrenamiento de última generación.</li>
          <li>Áreas de acondicionamiento físico y salas de estudio.</li>
          <li>Cuerpo técnico especializado y comprometido.</li>
      </ul>
      <p>¡Únete a nuestra academia y forma parte del futuro de FutbolerosClub!</p>
    </div>
    )
  }
  export const Admision = () => {
    return (
      <div class="container">
    <h2>Proceso de Admisión a la Academia de Fútbol</h2>

    <p>¡Gracias por tu interés en unirte a la academia de fútbol de FutbolerosClub! A continuación, te detallamos el proceso de admisión:</p>

    <h3>Pasos a Seguir:</h3>

    <ol>
        <li>
            <h4>Formulario de Inscripción:</h4>
            
            <p>Completa el formulario de inscripción en línea disponible en nuestro sitio web. Asegúrate de proporcionar información precisa y completa.</p>
            <Button href="/ApplyNow">Link</Button>
        </li>

        <li>
            <h4>Evaluación de Habilidades:</h4>
            <p>Seleccionaremos a candidatos para una evaluación de habilidades. Esta prueba nos ayuda a identificar el nivel de habilidad y determinar la categoría adecuada.</p>
        </li>

        <li>
            <h4>Entrevista Personal:</h4>
            <p>Los candidatos que pasen la evaluación de habilidades serán convocados a una entrevista personal con nuestro cuerpo técnico. Queremos conocerte y entender tu pasión por el fútbol.</p>
        </li>

        <li>
            <h4>Confirmación de Admisión:</h4>
            <p>Los candidatos seleccionados recibirán una notificación de admisión. Te proporcionaremos detalles sobre la matrícula y los requisitos adicionales.</p>
        </li>
    </ol>

    <h3>Requisitos:</h3>

    <ul>
        <li>Edades: 6-16 años.</li>
        <li>Compromiso y pasión por el fútbol.</li>
        <li>Formulario de autorización parental para menores de edad.</li>
    </ul>

    <p>¡Estamos emocionados de conocer a nuevos talentos! ¡Buena suerte en tu proceso de admisión a la academia de FutbolerosClub!</p>
</div>
      )
    }
    
    export const Apply = () => {
      return (
        <div className='.containerLeft'>
          <MyForm />
        </div>
        )
      }
      
        
        export const Schools = () => {
          return (
      <div>
         <video src={require("../assets/video/working.mp4")} autoplay="true" muted="true" loop="true" poster="https://carontestudio.com/img/contacto.jpg"></video>
      </div>
      )
    }
    
    export function Sponsor() {
      return (
        <div>
          <Sponsors />
      </div>
    )
  }
  

