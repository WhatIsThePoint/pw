import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* ================SKill 2===================== */}
        <article className="service">
          <div className="service__head">
            <h3>Tehcnical SKills</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Practical Problem Solving With Python.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Theoretical Problem Solving</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Data Base Management (SQL,PHP, PHP Myadmin).</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Web Development.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Web Design.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Creative Thinking.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Microsoft Office (Word, Excel....).</p>
            </li>
          </ul>
        </article>
        {/* ================SKill 2===================== */}
        <article className="service">
          <div className="service__head">
            <h3>Aptitude</h3>
          </div>
          <ul className="service__list">
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Fluent in English, French, Arabic.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Team oriented worker.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Capable of team leading.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Competitive.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Cooperative.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Efficient.</p>
            </li>
            <li>
              <AiOutlineCheck className='service__list-icon'/>
              <p>Punctual.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services