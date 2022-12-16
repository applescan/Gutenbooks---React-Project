import './App.css';
import React from 'react'
import NavBar from './components/Elements/NavBar';
import { Route, Routes } from 'react-router-dom';
import BookDetail from './components/Sections/BookDetail';
import Loading from './components/Elements/Loading';
import Register from './components/Sections/Register'
import Footer from './components/Elements/Footer'

const LazyHome = React.lazy(() => import('./components/Sections/Header'))
const LazyAdventure = React.lazy(() => import('./components/Sections/Adventure'))
const LazyHorror = React.lazy(() => import('./components/Sections/Horror'))
const LazyDystopian = React.lazy(() => import('./components/Sections/Dystopian'))
const LazyFiction = React.lazy(() => import('./components/Sections/Fiction'))
const LazyHistorical = React.lazy(() => import('./components/Sections/Historical'))
const LazyScience = React.lazy(() => import('./components/Sections/Science'))

function App() {
  return (
    <>
      <NavBar />


      <Routes>

        <Route path="/" element={<React.Suspense fallback={<Loading />}>

          <LazyHome />

        </React.Suspense>} />

        <Route path=":id" element={<BookDetail />} />


        <Route path="/adventure" element={<React.Suspense fallback={<Loading />}>
          <LazyAdventure /></React.Suspense>}>
          <Route path=':pageid' element={<LazyAdventure />} />
        </Route>

        <Route path="adventure/detail/:id" element={<BookDetail />} />



        <Route path="/horror" element={<React.Suspense fallback={<Loading />}>
          <LazyHorror /></React.Suspense>}>
          <Route path=':pageid' element={<LazyHorror />} />
        </Route>

        <Route path="horror/detail/:id" element={<BookDetail />} />


        <Route path="/dystopian" element={<React.Suspense fallback={<Loading />}>
          <LazyDystopian /></React.Suspense>}>
          <Route path=':pageid' element={<LazyDystopian />} />
        </Route>

        <Route path="dystopian/detail/:id" element={<BookDetail />} />


        <Route path="/fiction" element={<React.Suspense fallback={<Loading />}>
          <LazyFiction /></React.Suspense>}>
          <Route path=':pageid' element={<LazyFiction />} />
        </Route>

        <Route path="fiction/detail/:id" element={<BookDetail />} />


        <Route path="/historical" element={<React.Suspense fallback={<Loading />}>
          <LazyHistorical /></React.Suspense>}>
          <Route path=':pageid' element={<LazyHistorical />} />
        </Route>

        <Route path="historical/detail/:id" element={<BookDetail />} />


        <Route path="/science-fiction" element={<React.Suspense fallback={<Loading />}>
          <LazyScience /></React.Suspense>}>
          <Route path=':pageid' element={<LazyScience />} />
        </Route>

        <Route path="science-fiction/detail/:id" element={<BookDetail />} />


        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;


