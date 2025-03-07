import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import humanizeDuration from "humanize-duration";
import { assets } from '../../assets/assets';

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [courseData, setCourseData] = useState('');
  const { allCourses, calculateRating, calculateChapterTime, calculateCourseDuration } = useContext(AppContext);

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
        <h1 className='md:text-4xl text-2xl font-semibold text-gray-800' dangerouslySetInnerHTML={{ __html: courseData?.courseTitle ?? "Loading..." }}></h1>
        <p className='pt-4 md:text-base text-sm' dangerouslySetInnerHTML={{ __html: courseData?.courseDescription?.slice(0, 200) ?? "Fetching course details..." }}></p>

        {/* review and rating */}
        <div className='flex items-center space-x-2 pt-3 pb-3'>
          <p>{calculateRating(courseData)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={i < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt=''
                className='w-3.5 h-3.5'
              />
            ))}
          </div>
          {/* <p className='text-gray-500'>22</p> */}
          <p>{courseData?.enrolledStudents ? courseData.enrolledStudents.length : null}</p>
        </div>
        <p className='text-sm'>Course By <span className='text-blue-600 underline'>Grigary</span></p>
        <div className='pt-8 text-gray-800'>
          <h2 className='text-xl font-semibold'>Course Structure</h2>
          <div className='pt-5'>
            {courseData?.courseContent?.map((chapter, index) => (
              <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                <div className='flex items-baseline justify-between px-4 py-3 cursor-pointer select-none'>
                  <div className='flex items-center gap-2'>
                    <img src={assets.down_arrow_icon} alt="arrow" />
                    <p className='font-medium md:text-base text-sm'>{chapter.chapterTitle}</p>
                  </div>
                  <p className='text-sm md:text-base'>{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>
                </div>
                <div>
                  <ul>
                    {chapter?.chapterContent?.map((lecture, index) => (
                      <li key={index}>
                        <img src={assets.play_icon} alt="play icon" className='w-4 h-4 mt-1' />
                        <div>
                          <p>{lecture?.lectureTitle}</p>
                          <div>
                            {lecture?.isPreviewFree && <p>Preview</p>}
                            <p>{humanizeDuration(lecture?.lectureDuration * 60 * 1000, { units: ["h", "m"] })}</p>
                          </div>

                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )) || <p>Loading...</p>}
          </div>

        </div>
      </div>
      {/* Right col */}
      <div></div>
    </div>
  );
};

export default CourseDetails;