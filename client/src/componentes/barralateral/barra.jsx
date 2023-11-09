import React from 'react';
import styles from './Barra.module.css';

const Barra = () => {
  return (
    <div className={styles.navbarContainer}>
      <h2>Categorías</h2>
      <hr className={styles.line} />
      <div className={styles.titleh4}>
      <h4>Maquillaje</h4>
      </div>
      <div className={styles.titleh4}>
      <h4>Aceite</h4>
      </div>
      <div className={styles.titleh4}>
      <h4>Cremas</h4>
      </div>
      <div className={styles.titleh4}>
      <h4>Protector Solar</h4>
      </div>
      <div className={styles.titleh4}>
      <h4>Mascarillas</h4>
      </div>
      <div className={styles.titleh4}>
      <h4>Tonificantes</h4>
      </div>
      <hr className={styles.line} />
    </div>
  );
};

export default Barra;
