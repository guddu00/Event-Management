import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Event from './pages/event';
import Aboutus from './pages/aboutus';
import EventDetails from './pages/eventDetails';
import Contact from './pages/contactus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Event />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path='/contactus' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
