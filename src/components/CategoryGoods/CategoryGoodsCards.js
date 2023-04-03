import React from "react"
import shortid  from "shortid"

import { categoryCards } from "../../utils/categoryCards"

import styles from "../../styles/categoryGoods/categoryGoodsCards.module.scss"
import CategoryGoodsCard from "./CategoryGoodsCard";

function CategoryGoodsCards() {
    // const [categoryCards, setCategoryCards] = useState([])
    return (
        <section className={styles.cards__container}>
            <ul className={styles.cards}>
                {categoryCards.map((item) => {
                    return <li className="card" key={shortid.generate()}><CategoryGoodsCard title={item.title} link={item.src} /></li>
                }
                )}
            </ul>
        </section>
    );
}

export default CategoryGoodsCards;