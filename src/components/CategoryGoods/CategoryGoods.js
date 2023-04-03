import React from "react"

import styles from "../../styles/categoryGoods/categoryGoods.module.scss"
import CategoryGoodsCards from "./CategoryGoodsCards";
import CategoryTitle from "../CategoryTitle"

function CategoryGoods() {
  return (
    <section className={styles.category}>
        <CategoryTitle title="Категории товаров"/>
        <CategoryGoodsCards />
    </section>
  );
}

export default CategoryGoods;