import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./components/dashboard";
import Produkte from "./components/produkte";
import Detail from "./components/detail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/produkte" element={<Produkte />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Bitte wähle ein Produkt</p>
              </main>
            }
          />
          <Route path=":produktId" element={<Detail />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
