import { Route, Routes } from "react-router-dom";
import "./App.css";
import Trivia from "./pages/Trivia/Trivia";
import TresEnRaya from "./pages/TresEnRaya/TresEnRaya";
import Wordle from "./pages/Wordle/Wordle";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/trivia" element={ <Trivia /> } />
      <Route path="/tresEnRaya" element={ <TresEnRaya /> } />
      <Route path="/wordle" element={ <Wordle /> } />
    </Routes>
    </div>
  );
};

export default App;
