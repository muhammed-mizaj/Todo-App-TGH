import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';


import TodoList from './pages/TodoList';
function App() {
  return (
    <div className='bg-slate-800 h-screen'>
    <Router>
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<TodoList/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
          </div>
          </Router>
          </div>
  );
}

export default App;