import React from "react"
import root from "../styles/root.module.scss"
import page from "../styles/page.module.scss"
import Header from "../components/Header";
import CategoryGoods from "../components/CategoryGoods/CategoryGoods";
import CategorySlider from "../components/CategorySlider";

function App() {
  return (
    <div className={root.root}>
      <div className={page.page}>
        <Header />
        <main>
          <CategoryGoods />
          <CategorySlider />
        </main>
      </div>
    </div>
  );
}

export default App;
