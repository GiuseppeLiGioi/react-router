import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import ChiSiamo from "./pages/ChiSiamo";


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={HomePage}></Route>
    <Route path='/chisiamo' Component={ChiSiamo}></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
