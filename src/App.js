import Home from '../src/pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Administration from '../src/pages/Administration/administration'
import './global.css';
import './App.css';


  
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Administration" element={<Administration />} />
      </Routes>
  );
}

export default App;
