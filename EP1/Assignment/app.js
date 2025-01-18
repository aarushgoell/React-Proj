
  const heading = document.createElement("h1");
  heading.innerHTML = "Second hello world";
  const ref = document.getElementById("heading2");
  ref.appendChild(heading);


  const heading2 = React.createElement("div",{id : "parent"},React.createElement("h1",{},"Third Hello World"));

  const root =  ReactDOM.createRoot(document.getElementById("heading3"));

  root.render(heading2);