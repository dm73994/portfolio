import React from 'react'
import Translate from '../../utils/Translate'

const About = () => {
  return (
    <section className='aboutContainer'>
      <article>
        <h1> {Translate('general.about')} </h1>
        <p> {Translate('about.description')} </p>
      </article>

      

    </section>
  )
}

export default About