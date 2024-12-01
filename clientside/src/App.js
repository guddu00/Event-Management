import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Event from './pages/event';
import Aboutus from './pages/aboutus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/events' element={<Event/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
