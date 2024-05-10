import Header from '../../components/header/Header';
import Promo from '../../components/sections/home_04/Promo';
import Content_01 from '../../components/sections/home_04/Content_01';
import Content_02 from '../../components/sections/home_04/Content_02';
import Service from '../../components/sections/home_04/Service';
import Slider from '../../components/sections/home_04/Slider';
import Hero from '../../components/sections/home_04/Hero';
import Content_04 from '../../components/sections/home_04/Content_04';
import Faq from '../../components/sections/home_04/Faq';

const Home_04 = () => {
  return (
    <>
      <div className='page-wrapper relative z-[1] bg-black text-white'>
        
        <main className='main-wrapper relative overflow-hidden'>
          {/*...::: Hero Section Start :::... */}
          <Hero />
          {/*...::: Hero Section End :::... */}
          {/*...::: Promo Section Start :::... */}
          <Promo />
          {/*...::: Promo Section End :::... */}
          {/*...::: Content Section-1 Start :::... */}
          <Content_01 />
          {/*...::: Content Section-1 End :::... */}
          {/*...::: Content Section-2 Start :::... */}
          <Content_02 />
          {/*...::: Content Section-2 End :::... */}
          {/* Separator */}
          <div className='global-container overflow-hidden'>
            <div className='h-[1px] w-full bg-[#363636]' />
          </div>
          {/* Separator */}
          {/*...::: Service Section Start :::... */}
          <Service />
          {/*...::: Service Section End :::... */}
          {/*...::: Text Slide Section Start :::... */}
          <Slider />
          {/*...::: Text Slide Section End :::... */}
          {/*...::: Content Section-3 Start :::... */}
          {/*...::: Content Section-3 End :::... */}
          {/*...::: Content Section-4 Start :::... */}
          <Content_04 />
          {/*...::: Content Section-4 End :::... */}
          {/* Separator */}
          <div className='global-container overflow-hidden'>
            <div className='h-[1px] w-full bg-[#363636]' />
          </div>
          {/* Separator */}
          {/*...::: FAQ Section Start :::... */}
          <Faq />
          {/*...::: FAQ Section End :::... */}
        </main>
      </div>
    </>
  );
};

export default Home_04;
