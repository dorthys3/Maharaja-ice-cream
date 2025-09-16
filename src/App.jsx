import './App.css'
import Firstpg from './Firstpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Secondpg from './Secondpg';
import Thirdpg from './Thirdpg';
import Fourthpg from './Fourthpg';
import Fifthpg from './Fifthpg';
import { Routes, Route, Link } from "react-router-dom";
import Sixthpg from './Sixthpg';
function App() {
  
  return (

     <div>
      <Firstpg/>
      <Routes>
        <Route path="/" element={<Secondpg />} />
        <Route path="/about" element={<Thirdpg  />} />
        <Route path="/icecream" element={<Fourthpg  />} />
        <Route path="/gallary" element={<Fifthpg />} />
        <Route path="/contact" element={<Sixthpg />} />
      </Routes>
    </div> 
  )
}

export default App
