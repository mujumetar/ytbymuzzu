import { createContext, useContext, useEffect, useState } from "react";
import { fetchdata } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("new");

  useEffect(() => {
    fetchalldata(value);
  }, [value]);

  const fetchalldata = (query) => {
    setLoading(true);
    fetchdata(`search/?q=${query}`).then(({contents}) => {
      setData(contents);
      setLoading(false);
    });
  };
  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth=()=>useContext(AuthContext)