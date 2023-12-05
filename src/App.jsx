import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleCard from "./components/ArticlesCard";
import Navigation from "./components/Navigation";
import ChangeUser from "./components/ChangeUser";
import { UserContext } from "./components/User";
import { useEffect, useState } from "react";
import ErrorPage from "./components/ErrorPage";
import { getTopics } from "./api";
import Post from "./components/Post";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, [topics]);

  return (
    <>
      <div className="App">
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Header />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/articles"
              element={<Articles topics={topics} setTopics={setTopics} />}
            ></Route>

            <Route
              path="articles/:article_id"
              element={<ArticleCard />}
            ></Route>
            <Route path="/users" element={<ChangeUser />}></Route>
            <Route path="/post" element={<Post topics={topics} />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
          </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
