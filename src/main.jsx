import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import "./index.css";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Navbar from './components/Pages/Navbar';
import Fooder from './components/Pages/Fooder';
import Van from './components/Pages/Van';
import Vandetil from './components/Pages/Vandetil';
import Layout from './components/Pages/Layout';
import Hostinglayout from './components/Pages/Hostinglayout';
import Dashboard from './components/Pages/Host/Dashboard';
import Income from './components/Pages/Host/Income';
import Review from './components/Pages/Host/Reviews';
import Vans from './components/Pages/Host/Vans';
import VansHostDetil from './components/Pages/Host/VansHostDetil';
import SubDetails from './components/Pages/Host/SubDetails';
import SubPricing from './components/Pages/Host/SubPricing';
import SubPhotos from './components/Pages/Host/SubPhotos';
import NotFound from '../src/components/Pages/NotFount';

import "./server"; // Assuming this is required for some functionality

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="van" element={<Van />} />
    <Route path="vans/:id" element={<Vandetil />} />
    
    <Route path="host" element={<Hostinglayout />}>
      <Route index element={<Dashboard />} />
      <Route path="income" element={<Income />} />
      <Route path="vans" element={<Vans />} />
      <Route path="review" element={<Review />} />
      <Route path="vans/:id" element={<VansHostDetil />}>
        <Route index element={<SubDetails />} />
        <Route path="subpricing" element={<SubPricing />} />
        <Route path="subphotos" element={<SubPhotos />} />
      </Route>
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
