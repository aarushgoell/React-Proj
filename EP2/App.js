
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id: "parent"},[
  React.createElement("div",{id: "child1"},
  [React.createElement("h1",{},"THis is namaste React "),
  React.createElement("h2",{},"Hello children2")
  ]),
  React.createElement("div",{id: "chil2"},
  [React.createElement("h1",{},"Hello children1"),
  React.createElement("h2",{},"Hello children2")
  ])
  ]);
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);