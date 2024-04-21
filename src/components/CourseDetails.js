import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AddCourseModal from './AddCourseModal';
import EditCourseModal from './EditCourseModal';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [course, setCourse ] = React.useState(null);
    const [courses, setCourses] = React.useState([]);
    const API = 'http://localhost:3005';
    const navigate = useNavigate();
    
    const [isAddingCourse, setIsAddingCourse] = React.useState(false);
    const [isEditingCourse, setIsEditingCourse] = React.useState(false);

    const handleOpenAddCourseModal = () => {
        // navigate('/add-course');
        setIsAddingCourse(true);
    };
    const handleCloseAddCourseModal = () => {
        setIsAddingCourse(false);
    };

    const handleEditCourse = () => {
        setIsEditingCourse(true);
    };
    const handleEditCourseClose = () => {
        setIsEditingCourse(false);
    };
    

    const handleSaveCourse = async (newCourseData) => {
        try {
            const response = await fetch(`${API}/courses`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newCourseData)
            });
            const newCourse = await response.json();
            if (response.ok) {
                setCourses([...courses, newCourse]);
                handleCloseAddCourseModal();
                navigate('/');
            } else {
                console.log('Error adding course data: ', response.status);
            }
        } catch (error) {
            console.log('Error adding course data: ', error);
        }
    };

    const handleUpdateCourse = async (toEditCourseData) => {
        try {
            const response = await fetch(`${API}/courses/${course.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(toEditCourseData)
            });
            const editedCourse = await response.json();
            if (response.ok) {
                setCourses(courses.map(co => (co.id === course.id ? editedCourse : co)));
                setCourse(editedCourse);
                handleEditCourseClose();
            } else {
                console.log('Error editing course data: ' + response.status);
            }
        } catch (error) {
            console.log('Error adding course data: ', error);
        }
    };
    

    React.useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const response = await fetch(`${API}/courses/${courseId}`);
                const data = await response.json();
                if (response.ok) {
                    setCourse(data);
                } else {
                    console.log('Error fetching course details: ', response.status);
                }
            } catch (error) {
                console.log('Error fetching course details: ', error);
            }
        };

        fetchCourseDetails();
    }, [courseId]);
    
    
    if (!course) {
        return <div>Loading...</div>
    }
    return (
        <article className='courseDetailsSection'>
        <div className='courseDetailsUnit'>
        <h2 className='coursePageTitle'>Course Details</h2>
        <h4 className='courseName'>{course.name}</h4>
        <p>Course ID: 02300{courseId}</p>
        <p>Course Description: {course.description}</p>
        <p>Instructor: {course.instructor}</p>
        <p>Start Date: {course.start_date}</p>
        <p>End Date: {course.end_date}</p>
        <p>Enrollment Status: {course.enrollment_status}</p>
        <p>Course Materials: {course.materials}</p>
        <section>
            <aside className='courseDetailsButtonSection'>
            <button className='courseDetailsButton' onClick={handleOpenAddCourseModal}>Add Course</button>
            <button className='courseDetailsButton' onClick={handleEditCourse}>Edit Course</button>
            <Link to={"/"}><button className='courseDetailsButton'>Back</button></Link>
            </aside>
            {isAddingCourse && (
                <div className='addCourseModal'>
                    <AddCourseModal onSave={handleSaveCourse} onCancel={handleCloseAddCourseModal}/>
                </div>
            )}
            {isEditingCourse && (
                <div className='editCourseModal'>
                <EditCourseModal courseData={course} onSave={handleUpdateCourse}
                onCancel={handleEditCourseClose}/>
                </div>
            )}
        </section>
        
        </div>
        </article>
  )
}

export default CourseDetails