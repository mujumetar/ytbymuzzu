import React, { useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import Listitems from "./Listitems";
import { data } from "../../data";

const Home = () => {
  // console.log(pageRef.current)
  const { 
    // data, 
    loading, page, setPage } = useAuth();
 


const scrollref = useRef(null)
const pageRef = useRef(null)
const bigRef = useRef(null)



useEffect(() => {
  
  let scrollEle = scrollref.current
  // console.log(scrollEle)
  // console.log(pageRef)
  let lastEle = scrollref.current.children[scrollref.current.children.length-1]

  // console.log(lastEle)
  //  console.log(lastEle)
const scrollDiv = scrollEle.getBoundingClientRect();
const lastDiv = lastEle.getBoundingClientRect();


// console.log("big Post -"+ scrollDiv.top)
// console.log("last Post -"+ lastDiv.top)




  
}, [])

function scrolling(){


    
  let scrollEle = scrollref.current
  // console.log(scrollEle)
  // console.log(pageRef)
  let lastEle = scrollref.current.children[scrollref.current.children.length-1]

  // console.log(lastEle)
  //  console.log(lastEle)
const scrollDiv = scrollEle.getBoundingClientRect();
const lastDiv = lastEle.getBoundingClientRect();


// console.log("scrollDiv.top "+ scrollDiv.bottom)
// console.log("lastDiv.top "+ lastDiv.top)

// console.log(typeof(lastDiv.bottom))

if(scrollDiv.bottom == lastDiv.top)
{
  console.log("called")
}



  
}




  
  return (
    <>

      <div className="flex mt-16">
        <Sidebar />
        <div  onScroll={scrolling} ref={bigRef} className="scroller border border-4 border-red-800  h-[calc(100vh-6.625rem)] h-screen overflow-y-scroll">
          <Listitems />
          <div ref={scrollref} className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">

            {!loading && data.map((ele) => {
              if (ele.type !== "video") return false;
              return <Video pageRef={pageRef}  key={ele.id} video={ele?.video} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <button className="p-2 border rounded-md bg-gray-200 my-2">Prev</button>
        <button className="btn bg-blend-darken p-3 ">{page}</button>
        <button className="p-2 border rounded-md bg-gray-200 my-2"  onClick={() => setPage(page + 1)}>Next</button>
      </div>

    </>


  );
};

export default Home;
