import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import FormsPage from './FormsPage';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [course, setCourse ] = React.useState(null);
    const [editingCourse, setEditingCourse] = React.useState(null);
    const API = 'http://localhost:3005';
    const navigate = useNavigate();

    const addCourse = () => {
        navigate("/forms");
    };
    
    const editCourse = (course) => {
        setEditingCourse(course);
        navigate("/forms");
    };
    
    const handleCancelEdit = () => {
        setEditingCourse(null);
        navigate(-1);
    };
    const handleSaveEdit = async (toEditCourse) => {
        try {
            const response = await fetch(`${API}/courses/${toEditCourse.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(toEditCourse)
            });
            if (response.ok) {
                setCourse(toEditCourse);
                setEditingCourse(null);
            } else {
                console.log('Error saving course: ', response.status);
            }
        } catch (error) {
            console.log('Error editing course: ', error);
        }
    }

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
        <div>
        <h2>Course Details</h2>
        <h4>{course.name}</h4>
        <p>Course ID: 02300{courseId}</p>
        <p>Instructor: {course.instructor}</p>
        <p>Start Date: {course.start_date}</p>
        <p>End Date: {course.end_date}</p>
        <p>Enrollment Status: {course.enrollment_status}</p>
        <p>Course Materials: {course.materials}</p>
        <section>
            <button onClick={addCourse}>Add Course</button>
            <button onClick={() => editCourse(course)}>Edit Course</button>
            <Link to={"/"}><button>Back</button></Link>
        </section>
        
        {editingCourse && (
            <FormsPage courseToEdit={editingCourse} onSubmit={handleSaveEdit} onCancel={handleCancelEdit}/>
        )}

    </div>
  )
}

export default CourseDetails