import React from "react"
import root from "../styles/root.module.scss"
import page from "../styles/page.module.scss"
import Header from "../components/Header";
import CategoryGoods from "../components/CategoryGoods";

function App() {
  return (
    <div className={root.root}>
      <div className={page.page}>
        <Header />
        <main>
          <CategoryGoods />
        </main>
      </div>
    </div>
  );
}

export default App;
