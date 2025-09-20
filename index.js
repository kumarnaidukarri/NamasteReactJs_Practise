// Deep nesting elements without JSX
let divEl = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", { id: "child-1" }, "heading"),
  React.createElement("p", { id: "child-2" }, "paragraph"),
]);
let rootEl = ReactDOM.createRoot(document.getElementById("root"));
rootEl.render(divEl);

// with JSX
/*
function Navbar() {
  return (
    <div id="parent">
      <h1 id="child-1">heading</h1> 
      <p id="child-2">paragraph</p>
    </div>
  );
}
*/