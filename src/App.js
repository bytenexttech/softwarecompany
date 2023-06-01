import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/Index.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Salesforce from './components/Salesforce.js';
import './App.css';
import Blog from "./components/Blog.js";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Index /></>}></Route>
          <Route path='/blogs/blog' element={<><Blog /></>}></Route>
          <Route path='/Services/Salesforce-development' element={<><Salesforce /></>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
