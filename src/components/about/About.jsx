import React from 'react'
import './about.css'
import ME from '../../assets/Barni02V.jpg'
import {AiOutlineExperiment} from 'react-icons/ai'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {AiOutlineProject} from 'react-icons/ai'

function About() {
    return (
        <section id='about'>
            <h5> Get to Know </h5>
            <h2> About Me </h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <AiOutlineExperiment className='about__icon'/>
                            <h5>Programming Journey</h5>
                            <small> 1 year as a student of CodeCool </small>
                        </article>

                        <article className='about__card'>
                            <BsFillPersonCheckFill className='about__icon'/>
                            <h5>Further studies</h5>
                            <small> Currently studying to get a BsC in Computer Science. (Online)</small>
                        </article>

                        <article className='about__card'>
                            <AiOutlineProject className='about__icon'/>
                            <h5>Projects</h5>
                            <small> 50 + projects on the way becoming a junior...</small>
                        </article>
                    </div>
                    <p> ~ Why hire me? ~ <br/>Because I am a hardworking reliable person who always give the best and
                        also wants to improve.</p>

                    <a href='#contact' className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
