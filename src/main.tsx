// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./page";
import RootLayout from "./layout";

import "./index.css"; // Ensure Tailwind or global styles are loaded

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RootLayout>
      <Home />
    </RootLayout>
  </React.StrictMode>
);
