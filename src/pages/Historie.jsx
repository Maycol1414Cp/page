import React from 'react'
import Carrousel from '../components/Carrousel';
import './Style.css'

function Histories() {
  return (
    <div className='containerHistories'>
        <div className='containerCarrousel'>
            <Carrousel />
        </div>
                    <div class="container">
                <h2>Eventos Históricos de FutbolerosClub</h2>

                <div class="historical-event">
                    <h3>La Gran Remontada</h3>
                    <p>Fecha: 15/05/2020</p>
                    <p>En este evento histórico, FutbolerosClub logró una asombrosa remontada en la final del torneo regional, marcando un hito en la historia del club.</p>
                </div>

                <div class="historical-event">
                    <h3>Inauguración del Estadio Fútbolmania</h3>
                    <p>Fecha: 10/09/2012</p>
                    <p>FutbolerosClub celebró la inauguración de su nuevo estadio, el majestuoso "Estadio Fútbolmania", marcando el inicio de una nueva era para el club.</p>
                </div>

                <div class="historical-event">
                    <h3>Copa Continental Ganada</h3>
                    <p>Fecha: 05/06/2016</p>
                    <p>FutbolerosClub se consagró campeón de la Copa Continental, logrando la victoria en una emocionante final y llevando la gloria a La Paz y a Bolivia.</p>
                </div>
            </div>
    </div>
  )
}
export default Histories;