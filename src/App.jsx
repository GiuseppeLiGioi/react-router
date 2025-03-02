import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={HomePage}></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
