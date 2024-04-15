import './App.scss'
import HomePage from './Pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sponsors from './Pages/Sponsors';
import Partners from './Pages/Partners';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/sponsors' element={<Sponsors />}/>
          <Route path='/partners' element={<Partners />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
