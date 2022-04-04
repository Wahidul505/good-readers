import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import BookDetails from './Components/BookDetails/BookDetails';
import DashBoard from './Components/DashBoard/DashBoard';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import ReachUs from './Components/ReachUs/ReachUs';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/home/book-details' element={<BookDetails />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/dash-board' element={<DashBoard />}></Route>
        <Route path='/reach-us' element={<ReachUs />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
