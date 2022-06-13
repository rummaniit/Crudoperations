import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { createContext, useEffect, useState } from 'react';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';

export let usersCon = createContext('usr')
function App() {
  let [users, setUsers] = useState([])
  // console.log(users);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div className="App">
      <usersCon.Provider value={[users, setUsers]}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/delete/:userid' element={<Delete></Delete>}></Route>
            <Route path='/read/:readid' element={<Read></Read>}></Route>
            <Route path='/create' element={<Create></Create>}></Route>
          </Routes>
        </BrowserRouter>
      </usersCon.Provider>
    </div>
  );
}

export default App;
