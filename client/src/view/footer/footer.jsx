import React from 'react';
import style from './Footer.module.css'; // Asegúrate de importar tu archivo de estilos CSS

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.column}>
          <h4>Información de Contacto</h4>
          <p>Lambare 928</p>
          <p>Asunción, Paraguay</p>
          <p>Teléfono: 0985 382995</p>
          <p>Email: mayacosmeticos@gmail.com</p>
        </div>
        <div className={style.column}>
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className={style.textCenter}>
        <p>Derechos de autor &copy; {new Date().getFullYear()} Maya Cosmeticos</p>
      </div>
    </footer>
  );
}

export default Footer;
