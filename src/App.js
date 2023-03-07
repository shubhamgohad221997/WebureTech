
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing_Page from './Components/Landing_Page';
import SideBar from './Components/Task2';
import Task1 from './Components/Task1';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Landing_Page/>} />
        <Route path='/task1' element={<Task1/>} />
        <Route path='/task2' element={<SideBar/>} />
      </Routes>
 
    </div>
  );
}

export default App;
