import React, { useRef } from "react";
import Sidebar from "../components/Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import Listitems from "./Listitems";

const Home = () => {
  const pageRef = useRef()

  console.log(pageRef.current)
  const { data,loading, page, setPage } = useAuth();
  console.log(data);
  return (
    <div className="flex mt-16">
      <Sidebar />
    <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
      <Listitems/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
    
        {!loading && data.map((ele) => {
          if (ele.type !== "video") return false;
          return <Video ref={pageRef} key={ele.id} video={ele?.video} />;
        })}
      </div>
    </div>
    <button >Prev</button>
    <button>{page}</button>
    <button onClick={() => setPage(page+1)}>Next</button>
    </div>
  );
};

export default Home;
