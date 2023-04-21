
import './App.css';


import Home from "./routes/Home";
import Navbar from './components/Navbar';
import { Route, Routes} from "react-router-dom";
import Services from "./routes/Services";
import Products from "./routes/Products";
import Contact from "./routes/Contact";
import Signup from "./routes/Signup";






function App() {
  return (
    <div className="App">
       <Navbar/>
      <Routes>

      <Route path='/' element={<Home/>}/>  
      <Route path='/services' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup' element={<Signup/>}/>

</Routes>
      

     
      
      

    </div>
  );
}

export default App;
