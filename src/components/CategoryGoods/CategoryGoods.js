import React from "react"

import arrow from "../../image/icons/arrow.svg"

import styles from "../../styles/categoryGoods/categoryGoods.module.scss"
import CategoryGoodsCards from "./CategoryGoodsCards";

function CategoryGoods() {
  return (
    <section className={styles.category}>
        <div className={styles.category__header}>
          <h1 className={styles.category__header__title}>Категории товаров</h1>
          <img className={styles.category__header__arrow} src={arrow} alt="Стрелочка"/>
        </div>
        <CategoryGoodsCards />
    </section>
  );
}

export default CategoryGoods;