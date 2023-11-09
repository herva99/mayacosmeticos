import React from 'react';
import styles from "./card.module.css"

export default function Card(props){
    return(
        <div className={styles.cardContainer}>
          <img src={props.img} alt={props.title} className={styles.imageContainer}/>
          <div className={styles.textContainer}>
          <p>₲ {props.cost}</p>
          <p>{props.title}</p>
          </div>
          <div className={styles.buttonContainer}>
            <button>AÑADIR AL CARRO</button>
          </div>
          <div className={styles.buttonContainer}>
                <button onClick={() => props.handleDelete(props.id)}>ELIMINAR</button>
            </div>
        </div>
    )
}