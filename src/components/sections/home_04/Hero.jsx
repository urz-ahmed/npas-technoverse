import { Link } from 'react-router-dom';

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id='hero-section'>
      <div className='relative z-[1] overflow-hidden text-center text-white'>
        {/* Section Spacer */}
        <div className="bg-[url('/assets/img/th-4/hero-bg.jpg')] bg-cover bg-no-repeat pb-20 pt-28 md:pb-[265px] md:pt-40 lg:pt-44 xl:pt-[224px]">
          {/* Section Container */}
          <div className='global-container'>
            <h1 className='jos mb-6 font-spaceGrotesk text-7xl leading-none -tracking-[3px] text-white'>
              Gen AI solutions for cybersecurity
            </h1>
            <div className='mx-auto max-w-[1090px]'>
              <p className='leading-[1.33] lg:text-xl xl:text-xl'>
                AI solutions for cyber security play a critical role in staying
                ahead of increasingly sophisticated cyber threats by providing
                faster, more accurate threat detection and response
                capabilities.
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className='jos mt-11 text-base font-bold'
            >
              <div className='relative mx-auto h-[60px] max-w-[500px] overflow-hidden rounded'>
                <input
                  type='email'
                  placeholder='Enter a link'
                  className='h-full w-full bg-colorCodGray px-6 pr-[150px]'
                  required=''
                />
                <button
                  type='submit'
                  className='button absolute right-0 top-0 inline-block h-full rounded border-none bg-colorGreen py-0 text-black after:border-none after:bg-white'
                >
                  Analyze
                </button>
              </div>
            </form>
          </div>
          {/* Section Container */}
        </div>
        {/* Background Gradient */}
        <div className='absolute left-1/2 top-[80%] -z-[1] h-[1280px] w-[1280px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#39FF14] to-[#37ff1467] blur-[250px]'></div>
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Hero;
