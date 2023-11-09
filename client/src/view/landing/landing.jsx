

import style from "./landing.module.css"

export default function Landing(){
    return(
        <div>
           <div className={style.divContainer}>
            <img className={style.imgContainer} src="https://i.ibb.co/gRpZV2M/skin.jpg" alt="img"/>
            <div className={style.textOverlay}>
                <h1>100% Pure Rose <br /> Essential Oil</h1>
                <h4>Our range of high-quality essential oils has <br /> been hand-picked by our scent specialists.</h4>
                <button className={style.buyButton}>Compra Ahora</button>
            </div> 
            <div className={style.title}>
            <h3 >El aceite esencial de rosa es conocido por sus <br/>         
            propiedades hidratantes, reconfortantes y <br/> equilibrantes.</h3>
            </div> 
           </div>
           <a className={style.buttonProductos} href="/home">Ver Todos Los Productos</a>
           <div className={style.productContainer}>
              <img className={style.secondImage} src="https://i.ibb.co/pZgkkBj/363803091-991079268761230-2296346328895747745-n.jpg" alt="img" />
              <div className={style.productInfo}>
                <h2>Acno Treatment Mak Idraet </h2>
                <h4>Máscara desincrustante, 300 gr.</h4>
                <h3>₲ 129.000</h3>
                <h1>Descripcion</h1>
                <h4>Acción Queratolítica y Antiséptica.</h4>
                <a className={style.buttonSecond}>Ver</a>
                <a className={style.buttonSecond2}>Añadir Al Carro</a>
              </div>
            </div>
            <div className={style.productContainer}>
              
              <div className={style.productInfo2}>
                <h2>Rich Hydrating Cream Idraet</h2>
                <h4>Hypoallergenic - thermal water, 300 gr.</h4>
                <h3>₲ 109.000</h3>
                <h1>Descripcion</h1>
                <h4>Restablece la emulsión hidrolipídica e hidrata profundamente.</h4>
                <a className={style.buttonSecond} >Ver</a>
                <a className={style.buttonSecond2}>Añadir Al Carro</a>
              </div>
              <img className={style.thirdImage} src="https://i.ibb.co/4jrKRKL/rch2.jpg" alt="img" />
            </div>
        </div>
    )
}