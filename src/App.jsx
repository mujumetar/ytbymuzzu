import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, UNSAFE_RemixErrorBoundary } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";
import Loading from "./loader/Loading";
// import {ErrorBoundary} from "./ErrorBoundary"


function App() {
  const [count, setCount] = useState(0);
const {loading} = useAuth()

  return (
    <>
    {loading && <Loading/>}
    <div>
      <UNSAFE_RemixErrorBoundary>
      <Navbar />

      </UNSAFE_RemixErrorBoundary>
    </div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/search/:searchQuery" element={<Search/>}/>
        <Route path="/video/:id" element={<PlayingVideo/>}/>
      </Routes>
    </>
  );
}

export default App;
