import React from "react";

const Listitems = () => {
  const cats = [
    "All",
    "Music",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "React",
    "Computer",
    "Crypto",
    "Trading",
    "bollywood",
    "News",
  ];
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar px-5">
     <div className="flex  space-x-4 justify-center items-center">
       {cats.map((ele) => {
        return (
          <div key={ele} className="flex-none px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-300 cursor-pointer">
            {ele}
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default Listitems;
