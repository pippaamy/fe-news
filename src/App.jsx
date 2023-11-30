import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleCard from "./components/ArticlesCard";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="articles/:article_id" element={<ArticleCard />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
