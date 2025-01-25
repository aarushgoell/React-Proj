import React from "react";
import { createRoot } from "react-dom/client";

// First segment

// const jsxHeading = <h1>namaste react using jsx </h1>

// const root = createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// 2nd segment

// const HeadingComponent  = ()=>{
//   return (
//     <h1>namaste react using functional component</h1>
//   )
// }

// const root = createRoot(document.getElementById("root"));

// console.log(<HeadingComponent/>);

// root.render(<HeadingComponent/>);

// 3d segment

// const Title = () => {
//   return <h1>This is the title</h1>;
// };

// const HeadingComponent = () => {
//   return (
//     <div>
//       <Title></Title>
//       <h1>namaste react using functional component</h1>
//     </div>
//   );
// };

// const root = createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// 4th segment executing js inside jsx

const HeadingComponent = () => {
  return (
    <div>
      <h1>{1 + 1}</h1>
      <h1>namaste react using functional component</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);


