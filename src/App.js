import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Datanotfound from './Pages/Shared/Datanotfound';
import Navbar from './Pages/Shared/Navbar';
import ToDo from './Pages/Home/ToDo';
import Calender from './Pages/Home/Calender';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/todo'element={<ToDo></ToDo>}></Route>
        <Route path='/calender'element={<Calender></Calender>}></Route>
        <Route path='*' element={<Datanotfound></Datanotfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
