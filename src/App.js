import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { Suspense } from "react";

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <Routing />
      </Router>
    </Suspense>
  );
}
