import React from 'react'

export const Author = () => {
  return (
    <div >
        <h1 className='text-center'>Autor de la web</h1>
        <div className='text-center'>
            <img className='logo' src={require('../assets/images/Author.png')}></img>
        </div>
        <h2 className='text-center'>Nombre: Maycol Alexander Alvarez Aduviri</h2>
        <h2 className='text-center'>Correo: Maycol1414Es@Gmail.com</h2>

    </div>
  )
}
