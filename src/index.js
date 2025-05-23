import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Scrool from "./components/Menhome/Scrool";

import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Scrool />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
reportWebVitals();
