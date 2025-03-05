import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CourseSection = () => {

  const {allCourses}=useContext(AppContext);
  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>It is a long established
        fact that a reader will be distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
        to using 'Content here, content here', making it look like readable English</p>
      
      <div>
        {allCourses.slice(0,4).map((course,index)=>(
          <CourseCard key={index} course={course}/>
        ))}
      </div>

      <Link to='/course-list' onClick={()=>scrollTo(0,0)}
      className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
      >Show All Courses</Link>
    </div>
  )
}

export default CourseSection