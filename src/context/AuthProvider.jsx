import { createContext, useContext, useEffect, useState } from "react";
import { fetchdata } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1)
  const [cursor, setCursor] = useState("")
  const [value, setValue] = useState("new");

  useEffect(() => {
    fetchalldata(value);
  }, [value, page]);

  const fetchalldata = (query) => {
    setLoading(true);
    fetchdata(`search/?q=${query}&cursor=${cursor}`).then((res) => {
      console.log(res)
      setData(res.contents);
      setCursor(res.cursorNext)
      setLoading(false);
    });
  };
  return (
    <AuthContext.Provider value={{ loading, data, value, setValue, page, setPage }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth=()=>useContext(AuthContext)