import React from 'react'
import Terminal from '../components/Terminal'

const Home = () => {
  return (
    <div>
        <div className=''>
        <h1 className='font-serif text-xl font-bold text-green-600  p-3'>Jane Waguthi</h1>
        <h2 className='font-serif text-sm text-white p-3' >Software Engineer</h2>
        <hr className='border-t border-green-500 mt-4'></hr>
        <img 
        src="passport.jpg" 
        alt="Description of image" 
        className="w-60 h-72 rounded-2xl shadow-xl object-cover mt-4"
        />
        <hr className='border-t border-green-500 mt-4'></hr>
        <div className='flex mt-5 p-6'>
            <nav className="space-x-6">
        <a  className="hover:text-white">
          about
        </a>
        <a href="#projects" className="hover:text-white">
          projects
        </a>
        <a href="#contact" className="hover:text-white">
          contact
        </a>
        <a href="#education" className="hover:text-white">
          Education
        </a>
        <a href="#skills" className="hover:text-white">
          skills
        </a>
        <a href="#help" className="hover:text-white">
          help
        </a>
      </nav>
    </div>
        </div>
        <Terminal/>
        <hr className='border-t border-green-500 mt-4'></hr>
        <div className='text-green-600'>
          <p>jaynii@portfolio:~$</p>
        </div>
    </div>
    
  )
}

export default Home