import React from 'react'
import Translate from '../../utils/Translate'
import { Helmet } from "react-helmet";
import { Navigate, useNavigate } from 'react-router-dom';
import Networks from '../../components/Networks';

const About = () => {

  const navigation = useNavigate();

  const nextPage = () => {
    navigation('/skills', {
      replace: false,
    })
  }

  return (
    <div className='about'>
      <section className='aboutContainer container'>
        <article>
          <h1> {Translate('general.hi')} </h1>
          <p> {Translate('about.description')} </p>
        </article>

        <article>
          <img src='/assets/coder.png' className='imgCoder' />
        </article>
      </section>
      
      <a onClick={nextPage}>
        <p className='pNext'> {Translate('general.nextPage')} </p>
        <div className="bi bi bi-arrow-right" ></div>
      </a>

      <Networks style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        fontSize: '1.5rem',
        justifyContent: 'space-around',
        padding: '1rem'
      }} />
    </div>
  )
}

export default About