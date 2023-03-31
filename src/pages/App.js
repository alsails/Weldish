import React from "react"
import root from "../styles/root.module.scss"
import page from "../styles/page.module.scss"
import Header from "../components/Header";

function App() {
  return (
    <div className={root.root}>
      <div className={page.page}>
        <Header />
      </div>
    </div>
  );
}

export default App;
