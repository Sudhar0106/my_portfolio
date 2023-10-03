import { Fragment, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home/home';
import { Test } from './pages/test';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/test' element={<Test />} />
        </Route>
      </Route>
    ))

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        limit={1}
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
