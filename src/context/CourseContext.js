import React from 'react'

const CourseContext = React.createContext({ courses: [], updateCourses: () => {} });

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = React.useState([]);

    const updateCourses = (toBeUpdatedCourses) => {
        setCourses(toBeUpdatedCourses);
    };

  return (
    <CourseContext.Provider value={{ courses, updateCourses }}>
        {children}
    </CourseContext.Provider>
  )
}

export { CourseContext, CourseProvider };