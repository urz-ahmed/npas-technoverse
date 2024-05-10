import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, link = title }) => (
  <section id='section-breadcrumb'>
    <div className='breadcrumb-wrapper'>
      <div className='global-container'>
        <div className='breadcrumb-block'>
          <h1 className='breadcrumb-title'>{title}</h1>
          <ul className='breadcrumb-nav'>
            <li><Link to='/'>Home</Link></li>
            <li>{link}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Breadcrumb;
