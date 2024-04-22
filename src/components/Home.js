import React from 'react'
import ListCourses from './ListCourses'

const Home = () => {
  return (
    <div className='homeSection'>
      <section className='leftHomeSection'>
        <h1 className='h1'>Evolve</h1>
        <h3 className='h3'>Into Who You Aspire To Be Within A Definite Timeline</h3>
        <p className='homeWriteUp'>Evolve is geared towards helping you with the required skills for building your desired career.</p>
        <button className='homeButton'>Get Started</button>
      </section>

      <section className='rightHomeSection'>
        <img className='Home1' src='https://img.freepik.com/premium-photo/photo-young-indian-woman-her-mid-20s-college-student-holding-book-her-chest_878783-7283.jpg?w=740' alt='Home1.jpg'/>
        <img className='Home3' src='https://img.freepik.com/premium-psd/hispanic-student-man-from-uk-posing-happily-with-passport-giving-thumbs-up_410516-124284.jpg?w=740' alt='Home2.jpg'/>
      </section>
      <ListCourses />
    </div>
  )
}

export default Home