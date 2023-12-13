import React from 'react';
function Footer(){
  return (
    <div className="footer-Cont">
        <div className="iconSocial">
            <h2><strong>Nuestras Redes:</strong></h2>
            <a href="https://www.facebook.com/"><img className="ico" src={require('../assets/icons/facebook.png')} alt="facebook" href='' /></a>
            <a href="https://www.instagram.com/"><img className="ico" src={require('../assets/icons/instagram.png')} alt="instagram" href='' /></a>
            <a href="https://twitter.com/"><img className="ico" src={require('../assets/icons/twitter-alt.png')} alt="x" href='' /></a>
            
        </div>
            <h2><strong>@ FutbolerosClub 2023 | Todos los derechos reservados.</strong></h2>
        <div className="copy">
            <h2> Pagina hecha con:</h2>
            <img className="ico1" src={require('../assets/icons/react.png')} alt="react" />
            <img className="ico2" src={require('../assets/icons/github.png')} alt="github" />
        </div>
    </div>
  );
};
export default Footer;