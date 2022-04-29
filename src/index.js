import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider, ThemeProvider, VideoProvider } from "./frontend/context";
import { makeServer } from "./server";

// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <VideoProvider>
            <App />
          </VideoProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>  
  </React.StrictMode>
);