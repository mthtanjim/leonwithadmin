import axios from "axios";
import React, { useEffect, useState } from "react";

const TestProductData = (_) => {
  const [posts, setPosts] = useState([]);

  const url = "http://localhost:4000/products";

  const postings = async () => {
    try {
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    postings();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts &&
        posts.map((myPost) => (
          <ul key={myPost._id}>
            <li>
              {myPost.title} : {myPost.description}
            </li>
          </ul>
        ))}
    </>
  );
};

export default TestProductData;
