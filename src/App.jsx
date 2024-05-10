import { Route, Routes } from 'react-router-dom';
import About from './pages/common/About';
import Home from './pages/home/Home';
import Contact from './pages/common/Contact';
import Error_404 from './pages/common/Error_404';
import Faq_02 from './pages/common/faq/faq_02/Faq_02';
import Login from './pages/common/Login';
import Pricing from './pages/common/Pricing';
import Reset_password from './pages/common/Reset_password';
import Services_Details from './pages/common/Service_Details';
import Signup from './pages/common/Signup';
import Team from './pages/common/team/Team';
import useJOSAnimation from './hooks/useJOSAnimation';
import Layout from './components/layout/Layout';
import Faq_01 from './pages/common/faq/faq_01/Faq_01';

function App() {
  // Init JOS Animation
  useJOSAnimation();

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home/>} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='faq-1' element={<Faq_01 />} />
          <Route path='faq-2' element={<Faq_02 />} />
          <Route path='team' element={<Team />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='reset-password' element={<Reset_password />} />
          <Route path='service-details' element={<Services_Details />} />
          <Route path='error-404' element={<Error_404 />} />
          <Route path='*' element={<Error_404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
