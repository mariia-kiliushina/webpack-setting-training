import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const sum = (...args) => {
  return args.reduce((arg, sum) => sum + arg, 0);
};
const average = (...args) => {
  return sum(...args) / args.length;
};

console.log(average(1, 3, 9, 4, 5));
const text = average(1, 2, 9, 4, 5);
let h1 = document.querySelector("h1");
if (h1 !== null) {
  h1.innerHTML = text;
}
const myDiv = document.createElement("h3");
myDiv.innerHTML = text * 3;
const body = document.querySelector("body");
body.append(myDiv);
