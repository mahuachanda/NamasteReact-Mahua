/** 
 * Creating the below DOM using react
 *  <div id="parent">
  <div id="child">
    <h1 id="heading">Nameste React, I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
  <div id="child2">
    <h1 id="heading">Nameste React, I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>; */

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from react!"
// ); //returns an react object, not creating h1 tag

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Nameste React, I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Nameste React, I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //creates the h1 tag, keep it inside the root element
