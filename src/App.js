import Home from '../src/pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Administration from '../src/pages/Administration/administration'
import './global.css';
import './App.css';


  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Administration" element={<Administration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
