import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Addcontact from "./components/Addcontact";
import Editcontact from "./components/Editcontact";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Addcontact />} />
        <Route path="/edit:id" element={<Editcontact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
