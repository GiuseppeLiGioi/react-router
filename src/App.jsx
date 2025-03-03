import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import ChiSiamo from "./pages/ChiSiamo";
import PostsList from "./pages/PostsList";
import DefaultLayout from "./layout/DefaultLayout";


function App() {


  return (
    <>
    <BrowserRouter>

    <Routes>

    <Route Component={DefaultLayout}>
    <Route path='/' Component={HomePage}></Route>
    <Route path='/chisiamo' Component={ChiSiamo}></Route>
    <Route path='/posts' Component={PostsList}></Route>

    </Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
