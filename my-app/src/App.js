import './App.css'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bisection from './components/Bisection';
import Falseposition from './components/FalsePosition';
import Newton from './components/Newton';
import Onepoint from './components/Onepoint';
import Secant from './components/Secant';
import Cramer from './components/Cramer';
import GaussElimination from './components/GuassElimination';

function App() {
  return (
    <div className="App">
    <Router>
      <Sidebar />
        <Routes>
          <Route path='Bisection' element = {<Bisection/>} />
          <Route path='FalsePosition' element = {<Falseposition/>} />
          <Route path='Onepoint' element = {<Onepoint/>} />
          <Route path='Newton' element = {<Newton/>} />
          <Route path='Secant' element = {<Secant/>} />
          <Route path='Cramer' element = {<Cramer/>}/>
          <Route path='GuassElimination' element = {<GaussElimination/>}/>
        </Routes>
    </ Router> 

    </div>
    
  );
}

export default App;
