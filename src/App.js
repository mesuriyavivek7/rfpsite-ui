
import './App.css'

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home></Home>} ></Route>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
