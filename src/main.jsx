import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { UtilsContextProvider } from "./context/UtilsContext.jsx";
import { Provider } from "react-redux";
// import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <AuthProvider>
        <UtilsContextProvider>
          <App />
        </UtilsContextProvider>
        {/* <App /> */}
      </AuthProvider>
    {/* </Provider> */}

  </BrowserRouter>
);
