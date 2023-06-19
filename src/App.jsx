import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Category from "./pages/Category";


const App = () => {
  return (
   <Router>
     <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category/:type" element={<Category/>} />
      </Routes>
     
    </div>
   
   </Router>
  )
}

export default App;
