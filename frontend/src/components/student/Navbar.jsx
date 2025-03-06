import React, { useContext, useEffect, useState } from 'react'
import { assets } from './../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'
const Navbar = () => {

  const isCourseListPage = location.pathname.includes('/course-list');


  const [isVisible, setIsVisible] = useState(true);
  let [lastScrollY, setLastScrollY] = useState(0);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  const { navigate, isEducator, setIsEducator } = useContext(AppContext);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY = (window.scrollY);
  }
  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className={`sticky top-0 flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 transition-transform duration-100 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'} ${isVisible ? 'transform translate-y-0' : 'transfom -translate-y-full'}`}>
      <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
        {user && <div className='flex items-center gap-5 cursor-pointer'>
          <button onClick={() => { navigate('/educator') }} className='cursor-pointer'>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
          <Link to='/my-enrollments'>My Enrollments</Link>
        </div>}
        {user ? <UserButton /> :
          <button onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer'>Create Account</button>}
      </div>
      {/* For phone screen */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        {user && <div className='cursor-pointer'>
          <button onClick={() => { navigate('/educator') }} className='cursor-pointer'>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
          <Link to='/my-enrollments'>My Enrollments</Link>
        </div>}
        {
          user ? <UserButton onClick={() => openSignIn} /> : <button onClick={() => openSignIn}><img src={assets.user_icon} alt="" /></button>
        }


      </div>
    </div>
  )
}

export default Navbar
