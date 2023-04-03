import React from "react"
import root from "../styles/root.module.scss"
import page from "../styles/page.module.scss"
import Header from "../components/Header";
import CategoryGoods from "../components/CategoryGoods/CategoryGoods";
import CategorySlider from "../components/CategorySlider";
import Footer from "../components/Footer";

function App() {
  return (
    <div className={root.root}>
      <div className={page.page}>
        <Header />
        <main className={page.page__main}>
          <CategoryGoods />
          <CategorySlider />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
