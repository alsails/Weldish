import React from "react"
import Logo from "../image/logo.png"
import styles from "../styles/header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.header__logo}>
                <img className={styles.header__logo__img} alt="Логотип" src={Logo}/>
            </div>
            <div className={styles.header__search_bar}>
                <button className={styles.header__search_bar__catalog_button}>Каталог</button>
                <input className={styles.header__search_bar__search}/>
                <button className={styles.header__search_bar__search_button}/>
            </div>
            <div className={styles.header__icon_menu}>
                <button className={styles.header__icon_menu__like}/> 
                <button className={styles.header__icon_menu__buy}/> 
                <button className={styles.header__icon_menu__profile}/> 
            </div>
        </div>
    </header>
  );
}

export default Header;
