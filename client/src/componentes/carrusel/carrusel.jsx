import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import styles from "./carrusel.module.css"

export default function Carrusel(){
    return(
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className={`carousel-item active ${styles.imageContainer }`} data-bs-interval="10000">
            <img src="https://i.ibb.co/gRpZV2M/skin.jpg" className={`d-block img-fluid ${styles.image}`} alt="mask"/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Mascara Facial</h5>
            <p>Para hidratar, purificar o iluminar la zona deseada.</p>
        </div>
        </div>
        <div className={`carousel-item ${styles.imageContainer }`} data-bs-interval="2000">
            <img src="https://i.ibb.co/gRpZV2M/skin.jpg" className={`d-block img-fluid ${styles.image}`} alt="mask"/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </div>
        </div>
        <div className={`carousel-item ${styles.imageContainer }`}>
            <img src="https://i.ibb.co/gRpZV2M/skin.jpg" className={`d-block img-fluid ${styles.image}`} alt="mask"/>
        <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
        </div>
        </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}