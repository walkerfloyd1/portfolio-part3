import React from "react";
import "../styles/list.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item" style={{
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: "center",
    backgroundColor: "white"
  }}>{children}</li>;
}