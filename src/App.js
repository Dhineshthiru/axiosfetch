import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

//AXIOS

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };

    //FETCH-API
    // const loadPost = () => {
    //   setLoading(true);
    //   return fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "GET",
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setLoading(false);
    //       setPosts(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setLoading(false);
    //     });
    // };

    loadPost();
  }, []);
  return (
    <div className="App">
      <h1>Axios vs Fetch in React JS</h1>
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts.map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}
    </div>
  );
}

export default App;