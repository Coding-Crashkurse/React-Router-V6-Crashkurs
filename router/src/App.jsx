import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Webshop</h1>
        <nav>
          <Link
            to="/dashboard"
            style={{
              padding: "1rem 0.5rem",
            }}
          >
            Dashboard
          </Link>
          <Link
            to="/produkte"
            style={{
              padding: "1rem 0.5rem",
            }}
          >
            Produkte
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
