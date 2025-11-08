import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routes";
import ErrorBoundary from "./components/common/ErrorBoundary";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import RestaurantModal from "./components/Modal/RestaurantModal";

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routing />
      </Router>
      <RestaurantModal />
    </ErrorBoundary>
  );
}
