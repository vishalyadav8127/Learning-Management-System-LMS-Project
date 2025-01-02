import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import AboutUs from './Pages/AboutUs.jsx';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        <Route path="/about" element={<AboutUs/>}></Route>\
        </Route>
      </Routes>
      
    </>
  )
}

export default App;
