const heading  = React.createElement("h1",{id : "Heading",xyz : "abc"},"Hello world from return");// React core thing for creating react element 

// console.log(heading)// THis is a normal js object or a react element and inside this object we have something known as props. Props are children  +  attributes we pass in to tag 


// const root = ReactDOM.createRoot(document.getElementById("root"));// creating a root to tell react that u have to render the things inside this root 

// root.render(heading);// We are passing a js object or react element to the root 

// root.render function is : take this object and convert it into a  a h1 tag which browser understands and put that inside the DOM or in root  


// If u want to create this type of structure 

{/* <div id = "parent">
  <div id = "child">
  <h1>"Hello Aarush"</h1>
  </div>
</div> */}

// const parent = React.createElement("div",{id: "parent"},
//   React.createElement("div",{id: "child"},
//   React.createElement("h1",{id: "children"},"Hello aarush")));


const parent = React.createElement("div",{id: "parent"},[
  React.createElement("div",{id: "child1"},
  [React.createElement("h1",{},"Hello children1"),
  React.createElement("h2",{},"Hello children2")
  ]),
  React.createElement("div",{id: "chil2"},
  [React.createElement("h1",{},"Hello children1"),
  React.createElement("h2",{},"Hello children2")
  ])
  ]);

  // This is how we create nested HTML structure inside react application

  console.log(parent);
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);// We are passing a js object or react element to the root 


// But it becomes very complicated to write this type of structure in this way and thats why we have jsx . jsx will make our life easy when we have to create tags but the core of react is in above line that is how we create element in react 
  

