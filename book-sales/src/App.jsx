import "./App.css";
import ButtonApp from "./Components/ButtonApp";
import Counter from "./Components/Counter";
import CounterReducer from "./Components/CounterReducer";
import ExpensiveCalculation from "./Components/ExpensiveCalculation";
import Produk from "./Components/Produk";
import ProfileApp from "./Components/ProfileApp";
import TextInput from "./Components/TextInput";
import Timer from "./Components/Timer";
// import ClickButton from "./Components/ClickButton";
// import FruitList from "./Components/List/FruitList";
// import Services from "./Components/Services";

// let array = [1, 2, 3];
// console.log(array);

// let originalArray = [1, 2, 3];
// let copiedArray = [...originalArray];

// copiedArray.push(4);

// console.log(originalArray);
// console.log(copiedArray);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = [...array1, ...array2];

console.log(combinedArray);

function sum(a, b, c) {
  return a + b + c;
}

let numbers = [10, 20, 30];
console.log(sum(...numbers));

let obj1 = { name: "Alice" };
let obj2 = { age: 25 };

let combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject);

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages";
import Books from "./Pages/books";
// import LoginForm from "./components/shared/LoginForm";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import Team from "./Pages/team";
import Contact from "./Pages/contact";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
