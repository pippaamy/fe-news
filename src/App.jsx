import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleCard from "./components/ArticlesCard";
import Navigation from "./components/Navigation";
import ChangeUser from "./components/ChangeUser";
import { UserContext } from "./components/User";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  return (
    <>
      <div className="App">
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/articles" element={<Articles />}></Route>
            <Route
              path="articles/:article_id"
              element={<ArticleCard />}
            ></Route>
            <Route path="/users" element={<ChangeUser />}></Route>
          </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
