import './App.scss'
import HomePage from './Pages/HomePage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
