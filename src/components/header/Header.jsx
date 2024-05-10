import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

// eslint-disable-next-line react/prop-types
const Header = ({ loginCSS, signupCSS, navColor, light }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header site-header--absolute is--white py-3'
      id='sticky-menu'
    >
      <div className='global-container border-b border-gray-400'>
        <div className='flex items-center justify-between gap-x-8'>
          {/* Header Logo */}
          <Link to='/' className='font-raleway text-2xl text-cyan-200'>NPAS@HIT</Link>
          {/* Header Logo */}
          {/* Header Navigation */}
          <Navbar
            mobileMenu={mobileMenu}
            setMobileMenu={setMobileMenu}
            color={navColor}
          />
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className='flex items-center gap-6'>
            <Link to='/login' className={signupCSS}>
              Login
            </Link>
            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className={`mobile-menu-trigger ${
                  light ? 'is-white' : 'is-black'
                }`}
              >
                <span />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header;
