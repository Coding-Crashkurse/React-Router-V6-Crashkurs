import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getProducts } from "../produkte";

const Produkte = () => {
  let produkte = getProducts();

  return (
    <>
      <div>
        <h3>Produkte</h3>
        <div
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
          }}
        >
          <div>
            {produkte.map((item) => {
              return (
                <NavLink
                  to={`/produkte/${item.id}`}
                  key={item.id}
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "black",
                    };
                  }}
                >
                  {item.produkt}
                </NavLink>
              );
            })}
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Produkte;
