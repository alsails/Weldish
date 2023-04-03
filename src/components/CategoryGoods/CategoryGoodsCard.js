import React from "react"

import styles from "../../styles/categoryGoods/categoryGoodsCard.module.scss"

function CategoryGoodsCard({title, link}) {
  return (
    <section className={styles.card}>
        <img className={styles.card__img} src={link} alt={title}/>
        <div className={styles.card__info_container}>
            <p className={styles.card__title}>{title}</p>
        </div>
    </section>
  );
}

export default CategoryGoodsCard;