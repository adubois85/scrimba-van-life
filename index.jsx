import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route 
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansLoader } from './pages/Vans/Vans'
import VanDetail, { loader as VanDetailLoader} from "./pages/Vans/VanDetail"
import Layout from './components/Layout';
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans'
import HostVanDetail, { loader as hostVanDetailLoader } from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostVanPricing from './pages/Host/HostVanPricing'
import NotFound from './pages/NotFound'
import Error from './components/Error';
import Login from './pages/Login'

import "./server"

const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route  path="login" element={<Login />} />
            <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
            <Route path="vans/:id" element={<VanDetail />} loader={VanDetailLoader} />
            <Route path='host' element={<HostLayout />}>
                <Route index element={<Dashboard />} loader={() => {return null}} />
                <Route path='income' element={<Income />} loader={() => {return null}} />
                <Route path='reviews' element={<Reviews />} loader={() => {return null}} />
                <Route path='vans' element={<HostVans />} loader={hostVansLoader} />
                <Route path='vans/:id' element={<HostVanDetail />} loader={hostVanDetailLoader} >
                    <Route index element={<HostVanInfo />} loader={() => {return null}} />
                    <Route path='pricing' element={<HostVanPricing />} loader={() => {return null}} />
                    <Route path='photos' element={<HostVanPhotos />} loader={() => {return null}}/>
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);