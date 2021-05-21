import React from 'react';
import { mobileData } from './data';

function CreationsDesktop() {
  const [data, setData] = React.useState(mobileData);

  return (
    <section className='creations-desktop'>
      <div className='title'>
        <h2>Our Creations</h2>
        <div className='btn-container'>
          <button className='btn'>See All</button>
        </div>
      </div>
      <section>
        {data.map((item) => {
          const { id, title, image } = item;
          return (
            <article key={id}>
              <div>
                <img
                  src='https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                  alt=''
                />
              </div>

              <h3>{title}</h3>
            </article>
          );
        })}
      </section>
    </section>
  );
}

export default CreationsDesktop;
