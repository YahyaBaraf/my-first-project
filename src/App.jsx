import './App.css'
import Employee from './components/Employee';
import Header from './components/Header'
import ListeEmployee from './components/ListeEmployee'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      {/* // http://localhost:3000 */}
      <Route path='/' element = { <ListeEmployee/>}></Route>
      {/* // http://localhost:3000/employees */}
      <Route path='/employees' element = { <ListeEmployee/>}></Route>
      {/* // http://localhost:3000/add-employee */}
      <Route path='/add-employee' element = {<Employee/>}></Route>
      {/* // http://localhost:3000/edit-employee/1 */}
      <Route path='/edit-employee/:id' element = {<Employee/>}></Route>


    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
