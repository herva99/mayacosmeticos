import React from 'react';
import style from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={`${style.container} ${style.fixedNavbar}`}>
      <div className={style.navbarContent}>
        <a className= {style.navBrand} href="/">Maya Cosmeticos</a>
        <button className={style.navbarToggler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={style.navItems}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a className={`${style.navLink} ${style.active}`} href="/home">Home</a>
            </li>
            <li className={style.navItem}>
              <a className={style.navLink} href="/createProduct">Crear Producto</a>
            </li>
            <li className={`${style.navItem} ${style.dropdown}`}>
              <a className={`${style.navLink} ${style.dropdownToggle}`} href="/">Productos</a>
              <ul className={style.dropdownMenu}>
                <li><a className={style.dropdownItem} href="/">Mascarillas</a></li>
                <li><a className={style.dropdownItem} href="/">Limpiadores</a></li>
                <li><hr className={style.dropdownDivider} /></li>
                <li><a className={style.dropdownItem} href="/">Todos Los Productos</a></li>
              </ul>
            </li>
          </ul>
          <form className={style.searchForm} role="search">
            <input className={style.searchInput} type="search" placeholder="Buscar" aria-label="Search" />
            <button className={style.searchButton} type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
