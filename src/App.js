import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/Index.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Training from "./components/Training.js";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Index /></>}></Route>
          <Route path='/About' element={<><About /></>}></Route>
          <Route path='/Contact' element={<><Contact /></>}></Route>
          <Route path='/Training' element={<><Training /></>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
