import React from 'react';
import { Link } from 'react-router-dom';

const ListCourses = () => {
    const [courses, setCourses] = React.useState([]);
    const API = 'http://localhost:3005';

    const fetchCourses = async () => {
        try {
            const response = await fetch(`${API}/courses`);
            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.log('Error fetching course data: ', error);
        }
    };

    const deleteCourse = async (id) => {
        try {
            const response = await fetch(`${API}/courses/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchCourses();
            }
        } catch (error) {
            console.log('Error deleting course: ', error);
        }
    };
    // const updateCourses = (toBeUpdatedCourses) => {
    //     setCourses(toBeUpdatedCourses);
    // };


    React.useEffect(() => {
        fetchCourses();
    }, []);


  return (
    <>
        <section>
        <ul>
            {courses.map(course => (
                <li key={course.id}>
                    <section>
                        <h4>{course.name}</h4>
                        <p>Description: {course.description}</p>
                        <p>Instructor: {course.instructor}</p>
                        <p>Start Date: {course.start_date}</p>
                        <p>End Date: {course.end_date}</p>
                        <section>
                        <Link to={`/courses/${course.id}`}><button>View Details</button></Link>
                        <button onClick={() => deleteCourse(course.id)}>Delete Course</button>
                        </section>
                    </section>
                </li>
            ))}
        </ul>
        </section>
    </>
  )
}

export default ListCourses
