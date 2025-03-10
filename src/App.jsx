import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChiSiamo from "./pages/ChiSiamo";
import PostsList from "./pages/PostsList";
import DefaultLayout from "./layout/DefaultLayout";
import SinglePost from './pages/SinglePost';






function App() {


  return (
    <>
    <BrowserRouter>

    <Routes>

    <Route Component={DefaultLayout}>
    <Route path='/' Component={HomePage}></Route>
    <Route path='/chisiamo' Component={ChiSiamo}></Route>
    <Route path='/posts' Component={PostsList}></Route>
    <Route path='/posts/:id' Component={SinglePost}></Route>

    </Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
