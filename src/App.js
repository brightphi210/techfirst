import './App.scss'
import HomePage from './Pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sponsors from './Pages/Sponsors';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/sponsors' element={<Sponsors />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
