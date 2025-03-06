import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {


    const currency=import.meta.env.VITE_CURRENCY

    const [allCourses,setAllCourses]=useState([]);
    const [isEducator,setIsEducator]=useState(true);
console.log("All ",allCourses)
    const navigate=useNavigate();
    //get all courses
    const fetchAllCourses=async()=>{
        setAllCourses(dummyCourses);
    }

    //fn to calc avg rating of course
    const calculateRating = (course) => {

        if (!course.courseRating || course.courseRating.length === 0) {
            return 0;
        }
    
        let totalRating = 0;
        course.courseRating.forEach(rating => {
            totalRating += rating.rating;
        });
    
        return totalRating / course.courseRating.length;
    }
    
    
    useEffect(()=>{
        fetchAllCourses();
    },[])

    const value = {
        currency,allCourses,navigate,calculateRating,isEducator,setIsEducator
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

