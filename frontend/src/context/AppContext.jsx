import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext();

export const AppContextProvider = (props) => {


    const currency = import.meta.env.VITE_CURRENCY

    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    console.log("All ", allCourses)
    const navigate = useNavigate();
    //get all courses
    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    }

    //fn to calc avg rating of course
    const calculateRating = (course) => {
        console.log("course", course);
        if (!course || !course.courseRating || course.courseRating.length === 0) {
            return 0;
        }

        let totalRating = 0;
        course.courseRating.forEach(rating => {
            totalRating += rating.rating;
        });

        return totalRating / course.courseRating.length;
    }
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration);
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    }

    const calculateCourseDuration = (course) => {
        let time = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map(() => time += lecture.lectureDuration));
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
    }

    //fn to calc not of lectures

    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.array.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    }
    useEffect(() => {
        fetchAllCourses();
    }, [])

    const value = {
        currency, allCourses, navigate, calculateRating, isEducator, setIsEducator, calculateChapterTime, calculateCourseDuration,clearInterval
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

