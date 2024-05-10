import { Link } from 'react-router-dom';
import data from './data.json';
import Member from '../../../../../components/widget/team/Member';

const Team = () => {
  return (
    <section id='team-section'>
      {/* Section Spacer */}
      <div className='py-20 xl:py-[130px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mb-10 flex flex-wrap items-center justify-between lg:mb-12 xl:mb-20'>
            <div className='max-w-sm lg:max-w-3xl xl:max-w-[745px]'>
              <h2>Our team with bunch a of talents</h2>
            </div>
          </div>
          {/* Section Content Block */}
          {/* Team Member List */}
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Team Member Item */}
            {data.map((member, index) => (
              <Member key={index} {...member} />
            ))}
            {/* Team Member Item */}
          </ul>
          {/* Team Member List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Team;
