import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Pictures from "../components/Pictures";

const Photo = () => {
  // varaibles setting
  const [data, setData] = useState("");
  const [page, setPage] = useState(2);
  const [input, setInput] = useState("");

  // API Key & Endpoint
  const auth = "563492ad6f9170000100000145d6a453b9714a8ebbe22dd2ecff4ffa";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;

  // search function: load pictures' data from API
  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };

  // search function: more pictures' function
  const morePictures = async () => {
    let newURL;
    setPage(page + 1);
    if (input === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
    }
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
  };

  // initial pictures
  useEffect(() => {
    const initialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
    search(initialURL);
  }, []);

  // Main
  return (
    <div style={{ minHeight: "90vh" }}>
      <Search search={() => search(searchURL)} setInput={setInput} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Pictures data={d} />;
          })}
      </div>
      <div className="morePictures">
        <button onClick={morePictures}>Load More</button>
      </div>
    </div>
  );
};

export default Photo;
