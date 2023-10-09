import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, description } = people[index];

  const nextPerson = () => {
    setIndex((index + 1) % people.length);
  };

  const prevPerson = () => {
    setIndex((index - 1 + people.length) % people.length);
  };

  const randomPerson = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * people.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{description}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};

export default App;
