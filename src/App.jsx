import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home/home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    ))

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
