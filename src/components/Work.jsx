import { useEffect, useRef, useState } from 'react';
import WorkDesc from '../utils/Work';
import '../styles/work.css';

const Work = () => {
  const [index, setIndex] = useState(0);
  const [wrapperH, setWrapperH] = useState(null);
  const workWrapperRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (workWrapperRef.current) {
        const height = workWrapperRef.current.getBoundingClientRect().height;
        setWrapperH(height);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [index]);

  return (
    <section className='work' id='experience'>
      <h1 className='title'>
        <span className='number'>02.</span>
        <span className='main'>Experience</span>
      </h1>
      <div className='work-container'>
        <div className='btns-wrapper'>
          {WorkDesc.map(({ company }, i) => (
            <button
              className={`work-btn ${index === i ? 'selected' : ''}`}
              onClick={() => setIndex(i)}
              key={company}
            >
              {company}
            </button>
          ))}
        </div>
        <div className='absolute-wrapper' style={{ height: wrapperH }}>
          {WorkDesc.map(({ company, timePeriod, position, description }, i) => (
            <div
              className={`work-wrapper ${index === i ? 'selected' : ''}`}
              ref={workWrapperRef}
              key={company}
            >
              <h3>
                {position} <span className='green'>@ {company}</span>
              </h3>
              <p className='time'>{timePeriod}</p>
              <ul>
                {description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
