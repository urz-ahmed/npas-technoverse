import { Link } from 'react-router-dom';

const Footer_04 = () => {
  return (
    <footer id='footer-4'>
      <div className='relative z-[1] overflow-hidden bg-black text-white'>
        {/* Section Container */}
        <div className='pb-10'>
          <div className='global-container'>
            <div className='mb-10 mt-[60px] h-[1px] w-full bg-white opacity-10' />
          </div>
  
          <div>
            <div className='global-container'>
              <div className='flex flex-wrap items-center justify-center gap-5 text-center md:justify-between md:text-left'>
                <Link to='/'>
                  <h1 className='font-raleway text-2xl'>NPAS@HIT</h1>
                </Link>
                <p>
                  © Copyright {new Date().getFullYear()}, All Rights Reserved by
                  NPAS
                </p>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
        </div>
      </div>
    </footer>
  );
};

export default Footer_04;
