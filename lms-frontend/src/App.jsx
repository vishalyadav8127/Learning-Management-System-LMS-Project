import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import Footer from './Components/Footer.jsx'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}>
        
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
