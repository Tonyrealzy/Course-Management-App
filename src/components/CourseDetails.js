import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetails = () => {
    const { courseId } = useParams();
    const [course, setCourse ] = React.useState(null);
    const [editingCourse, setEditingCourse] = React.useState(null);
    const API = 'http://localhost:3005';

    const fetchCourses = async () => {
        try {
            const response = await fetch(`${API}/courses`);
            const data = await response.json();
            setCourse(data);
        } catch (error) {
            console.log('Error fetching course data: ', error);
        }
    };

    const addCourse = async (newCourse) => {
        try {
            const response = await fetch (`${API}/courses`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCourse)
            });
            if (response.ok) {
                fetchCourses();
            }
        } catch (error) {
            console.error('Error adding new course: ', error);
        }
    };

    const editCourse = async (toEditCourse) => {
        try {
            const response = await fetch(`${API}/courses/${toEditCourse.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toEditCourse)
            });
            if (response.ok) {
                fetchCourses();
                setEditingCourse(null);
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

    const handleEdit = (course) => {
        setEditingCourse({ ...course });
    }
    const handleCancelEdit = () => {
        setEditingCourse(null);
    };
    const handleSaveEdit = (toEditCourse) => {
        editCourse(toEditCourse);
    }

    
    if (!course) {
        return <div>Loading...</div>
    }

  return (
    <div>
        <h2>CourseDetails</h2>
        <h4>{course.name}</h4>
        <p>Course ID: 0000{courseId}</p>
        <p>Instructor: {course.instructor}</p>
        <p>Start Date: {course.start_date}</p>
        <p>End Date: {course.end_date}</p>
        <p>Enrollment Status: {course.enrollment_status}</p>
        <p>Course Materials: {course.materials.join(', ')}</p>
        <section>
            <button onClick={() => addCourse(course)}>Add Course</button>
            <button onClick={() => handleEdit(course)}>Edit Course</button>
            <Link to={"/"}><button>Back</button></Link>
        </section>
        
        {editingCourse && (
            <div>
                <h3>Edit Course</h3>
                <form onSubmit={() => handleSaveEdit(editingCourse)}>
                    <label>Course Name: 
                        <input 
                        type='text'
                        value={editingCourse.name}
                        onChange={(e) => setEditingCourse({ ...editingCourse, name: e.target.value })}/>
                    </label>
                    <label>Description: 
                        <input
                        type='text'
                        value={editingCourse.description}
                        onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value})}/>
                    </label>
                    <label>Instructor: 
                        <input
                        type='text'
                        value={editingCourse.instructor}
                        onChange={(e) => setEditingCourse({ ...editingCourse, instructor: e.target.value})}/>
                    </label>
                    <label>Start Date: 
                        <input
                        type='text'
                        value={editingCourse.start_date}
                        onChange={(e) => setEditingCourse({ ...editingCourse, start_date: e.target.value})}/>
                    </label>
                    <label>End Date: 
                        <input
                        type='text'
                        value={editingCourse.end_date}
                        onChange={(e) => setEditingCourse({ ...editingCourse, end_date: e.target.value})}/>
                    </label>
                    <label>Enrollment Status: 
                        <input
                        type='text'
                        value={editingCourse.enrollment_status}
                        onChange={(e) => setEditingCourse({ ...editingCourse, enrollment_status: e.target.value})}/>
                    </label>
                    <label>Materials: 
                        <input
                        type='text'
                        value={editingCourse.materials}
                        onChange={(e) => setEditingCourse({ ...editingCourse, materials: e.target.value})}/>
                    </label>
                    <section>
                        <button type='submit'>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </section>
                </form>
            </div>
        )}
    </div>
  )
}

export default CourseDetails