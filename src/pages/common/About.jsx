import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Content_02 from '../../components/sections/inner-pages/about/Content_02';
import Team from '../../components/sections/inner-pages/about/team/Team';
import Contact from '../../components/contact/Contact';

const About = () => {
  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
       
        <Breadcrumb title='About Us' link='About' />
        
        <Content_02 />
       
        <Team />
        
        <Contact />
        
      </main>
    </>
  );
};

export default About;
