import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [courseData, setCourseData] = useState(null);
  const { allCourses } = useContext(AppContext);

  const fetchCourseData = () => {

    const findCourse = allCourses.find(course => course.id === id);
    setCourseData(findCourse);

  };

  useEffect(() => {
    fetchCourseData();
  }, [allCourses]);

  return (
    <div className='flex md:flex-row flex-col-reverse gap-10 relative items-start justify-around md:px-36 md:pt-30 pt-20 text-left'>
      <div className='absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70'></div>

      {/* Left col */}
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: courseData?.courseTitle ?? "Loading..." }}></h1>
        <p dangerouslySetInnerHTML={{ __html: courseData?.courseDescription?.slice(0, 200) ?? "Fetching course details..." }}></p>

      </div>
      {/* Right col */}
    </div>
  );
};

export default CourseDetails;
