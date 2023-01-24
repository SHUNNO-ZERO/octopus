import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './Pages/Shared/Error/Error';

const Navbar = React.lazy(() => import('./Pages/Shared/Navbar/Navbar'));
const Home = React.lazy(() => import('./Pages/Home/Home'));
const About = React.lazy(() => import('./Pages/About/About'));
const Footer = React.lazy(() => import('./Pages/Shared/Footer/Footer'));

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="*" element={<Error />} /> */}
                </Routes>
                <Footer />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
