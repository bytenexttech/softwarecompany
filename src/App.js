import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './components/Index.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Training from "./components/Training.js";
import Terms from "./components/Terms.js";
import Refund from "./components/Refund.js";
import Privacy from "./components/Privacy.js";
<<<<<<< HEAD
import Internship from "./components/Internship.js";
=======
import PageNotFound from "./components/PageNotFound.js";
>>>>>>> 6006b67f525408ad29551bb7346b9433f604cb65

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Index /></>}></Route>
          <Route path='/About' element={<><About /></>}></Route>
          <Route path='/Contact' element={<><Contact /></>}></Route>
          <Route path='/Internship' element={<><Internship /></>}></Route>
          <Route path='/Training' element={<><Training /></>}></Route>
          <Route path='/Terms-and-Condition' element={<><Terms /></>}></Route>
          <Route path='/Privacy-Policy' element={<><Privacy /></>}></Route>
          <Route path='/Refund' element={<><Refund /></>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
