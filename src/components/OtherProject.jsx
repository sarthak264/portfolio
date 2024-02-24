import OtherProjects from '../utils/OtherProjects';
import '../styles/otherProject.css';

const OtherProject = () => {
  return (
    <section className='other-projects-container'>
      <h1 className='title'>
        <span className='main'>Other Noteworthy Projects</span>
      </h1>
      <div className='other-projects'>
        {OtherProjects.map((item, index) => {
          return (
            <div className='project-card' key={index}>
              <div className='upper'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  viewBox='0 0 24 24'
                  fill='none'
                  strokeWidth='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='folder'
                >
                  <title>Folder</title>
                  <path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
                </svg>
                <div
                  className='links-container'
                  target='_blank'
                  rel='noreferrer'
                >
                  <a href={item.github} target='_blank' rel='noreferrer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='live'
                    >
                      <title>GitHub</title>
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                    </svg>
                  </a>
                  <a href={item.link} target='_blank' rel='noreferrer'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      role='img'
                      viewBox='0 0 24 24'
                      fill='none'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='live'
                    >
                      <title>External Link</title>
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                      <polyline points='15 3 21 3 21 9'></polyline>
                      <line x1='10' y1='14' x2='21' y2='3'></line>
                    </svg>
                  </a>
                </div>
              </div>
              <h1 className='title'>{item.title}</h1>
              <p className='description'>{item.description}</p>
              <div className='project-footer'>
                <ul className='tech-stack'>
                  {item.technologies.map((tech, index) => {
                    return (
                      <li key={index} className='lang'>
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OtherProject;
