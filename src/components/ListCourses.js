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
        <div>
        <h3 className='coursePageTitle'>Popular Courses</h3>
        <ul className='courseListUnitContainer'>
            {courses.map(course => (
                <li className='courseListUnit' key={course.id}>
                    <section className='courseUnit'>
                        <h4 className='courseName'>{course.name}</h4>
                        <p>{course.description}</p>
                        <p>{course.instructor}</p>
                        <p>From {course.start_date} to {course.end_date}</p>
                        <aside className='courseButtonSection'>
                        <Link to={`/courses/${course.id}`}><button className='courseButton'>View Details</button></Link>
                        <button className='courseButton' onClick={() => deleteCourse(course.id)}>Delete Course</button>
                        </aside>
                    </section>
                </li>
            ))}
        </ul>
        </div>
    </>
  )
}

export default ListCourses
