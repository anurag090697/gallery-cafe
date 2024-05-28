const elem = React.createElement(
  "h1",
  { style: { color: "green" } },
  "ANURAG SHUKLA"
);
const elem2 = React.createElement(
  "p",
  null,
  "I'm learning to code with geekster "
);

const firstDiv = React.createElement(
  "div",
  { className: "first-div" },
  React.createElement("a", 
  { href: "https://www.w3schools.com/html/" },
   "HTML"),
  React.createElement("p",
   null, 
   "Learned html in module 3.")
);

const secondDiv = React.createElement(
  "div",
  { className: "second-div" },
  React.createElement("a",
    {href : "https://www.w3schools.com/css/"},
    "CSS"
  ),
  React.createElement("p",
   null,
    "Also Learned CSS in module 3."),
);

const thirdDiv = React.createElement(
  "div",
  { className: "third-div" },
  React.createElement("a",
    {href : "https://www.w3schools.com/js/"},
    "JAVASCRIPT"
  ),
  React.createElement("p", null, "Learned JavaScript in module 4.")
);

const container = React.createElement(
  "div",
  { className: "container" },
  elem,
  elem2,
  firstDiv,
  secondDiv,
  thirdDiv
);

ReactDOM.render(container, document.getElementById("root"));
