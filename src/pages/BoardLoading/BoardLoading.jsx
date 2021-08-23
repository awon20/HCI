import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

import { NewSketchBoard } from "../../pages";
// import { Link } from "react-router-dom";
import "./BoardLoading.css"


export function BoardLoading() {
  //https://www.youtube.com/watch?v=Y7pL5wG5QOg
  // https://github.com/codebucks27/React-Loading-Screen/blob/main/src/components/PreLoader1.js
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);
  // https://jsonplaceholder.typicode.com/guide/
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);

  return (
    <div className="spinner">
      {!done ? (
        // https://www.npmjs.com/package/react-loading
        <ReactLoading
          type={"spin"}
          color={"#95C6B8"}
          height={250}
          width={250}
          delay={300}
        />
      ) : (
        <NewSketchBoard
          >
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
        </NewSketchBoard>
      )}
    </div>
  );
}