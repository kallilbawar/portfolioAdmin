import {
  RouterContentContainer,
} from "./containers";
import "normalize.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <RouterContentContainer/>
    </Router>
  );
}
