import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../utils/rapidapi";
import Sidebar from "./Sidebar";
import SearchCard from "./SearchCard";
// import index from "index"


const Search = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = () => {
    fetchdata(`search/?q=${searchQuery}`).then(({ contents }) => {
      console.log(contents);
      setResult(contents);
    });
  };
  return (
    <div className="mt-32">
      <div>
        <Sidebar />
        <div>
          <div>
            {result?.map((ele,index) => {
              if (ele?.type !== "video") return false;
      
              return <SearchCard key={index} video={ele?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
