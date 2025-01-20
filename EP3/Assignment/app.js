import React from "react";
import ReactDOM from "react-dom/client";

// - Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

//   - Create the `same element using JSX`
//   - Create a `functional component of the same with JSX`
//   - `Pass attribute` into the tag in `JSX`
//   - `Composition of Component` (Add a component inside another)
//   - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// const headerElement = React.createElement("div", {}, [
//   React.createElement("h1", {}, "heading1"),
//   React.createElement("h2", {}, "heading2"),
//   React.createElement("h3", {}, "heading3"),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headerElement);

// Using jsx

// const headerJSX = (
//   <div className="title">
//     <h1>Heading1</h1>
//     <h2>Heading2</h2>
//     <h3>Heading3</h3>
//   </div>
// );

// const root2 = ReactDOM.createRoot(document.getElementById("root"));

// root2.render(headerJSX);

// Functional Component

// const HeaderComponent = () => (
//   <div className="title">
//     <h1 id="he1" className="afdf">
//       Heading1
//     </h1>
//     <h2>Heading2</h2>
//     <h3>Heading3</h3>
//   </div>
// );

// Component Composition

// const Title = () => {
//   return <h1>hii this is heading</h1>;
// };

// const HeaderComponent2 = () => (
//   <div className="title">
//     <h1 id="he1" className="afdf">
//       Heading1
//     </h1>
//     <Title></Title>
//     <h2>Heading2</h2>
//     <h3>Heading3</h3>
//   </div>
// );

// - Create a `Header Component` from scratch using `Functional Component` with JSX
//   - Add a `Logo on Left`
//   - Add a `search bar in middle`
//   - Add `User icon on right`
//   - Add `CSS to make it look nice`

const MainHeaderComponent = () => {
  return (
    <div className="inContain">
      <img src="image.png" />
      <input type="text" placeholder="search"></input>
      <div id="userIcon">A</div>
    </div>
  );
};

const root3 = ReactDOM.createRoot(document.getElementById("root"));

root3.render(<MainHeaderComponent />);
