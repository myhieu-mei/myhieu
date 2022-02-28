import React from 'react'
import './about.scss'
export default function About() {
  return (
    <section id='about'>
      <h1>About me</h1>
      <div className='about'>
        <div className='picture'>
          <img
            alt='myhieu'
            src='https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/274902268_149491240812943_7244335738293294119_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CH3iKL_ipTIAX9QRc-r&_nc_ht=scontent.fsgn2-3.fna&oh=00_AT9H9iWGHcMYwksDlHUAhlxFkUuNSEUPvYQPjvs6vT3OqQ&oe=62210CD8'
          />
        </div>
        <div className='info'>
          <hr width='1' size='500' color='black' />
          <div>
            <h3 className='intro'>Hi, I'm Hieu</h3>
            <h4>Front-end developer</h4>

            <p className='objective'>
              I'm 22 years old and come from Binh Dinh province. I am a person
              with self-motivated, highly passionate and hardworking looking for
              an opportunity to work in a challenging organization to utilize my
              skills and knowledge to work for the growth of the organization.
            </p>
            <hr />
            <br />
            <h3 className='edu'>Education</h3>
            <h4>Passerelles numériques Vietnam </h4>

            <p className='knowledge'>
              - Basic & Advanced Database <br />- Object Orient Programming{' '}
              <br />- Basic & Advanced Web Design <br />- Software Testing &
              SDLC
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
