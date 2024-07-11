import {Routes , Route} from "react-router-dom";

import './App.css';

import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Ride from "./pages/Ride";

function App() {
  return (
    <>
     
      <Routes>
        <Route 
        path='/'
        element={<Home/>}
         />
          <Route 
        path='/homepage'
        element={<HomePage/>}
         />
           <Route 
        path='/ride'
        element={<Ride/>}
         />
      </Routes>
     
  
    </>
  );
}

export default App;
