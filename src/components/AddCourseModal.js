import React from 'react';

const AddCourseModal = ({ onSave, onCancel }) => {
    const [newCourse, setNewCourse] = React.useState({
        name: '',
        description: '',
        instructor: '',
        start_date: '',
        end_date: '',
        enrollment_status: '',
        materials: ''
    });
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewCourse({ ...newCourse, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(newCourse);
    };

  return (
    <div className='modal'>
        <div className='modalContent'>
        <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <label> Course Name: 
                    <input type='text' name='name' value={ newCourse.name } onChange={handleChange}/>
                </label>
                <br></br>
                <label>Description: 
                    <input type='text' name='description' value={ newCourse.description } onChange={handleChange}/>
                </label>
                <br></br>
                <label>Instructor: 
                    <input type='text' name='instructor' value={ newCourse.instructor } onChange={handleChange}/>
                </label>
                <br></br>
                <label>Start Date: 
                <input type='text' name='start_date' value={ newCourse.start_date } onChange={handleChange}/>
                </label>
                <br></br>
                <label>End Date: 
                <input type='text' name='end_date' value={ newCourse.end_date } onChange={handleChange}/>
                </label>
                <br></br>
                <label>Enrollment Status: 
                <input type='text' name='enrollment_status' value={ newCourse.enrollment_status } onChange={handleChange}/>
                </label>
                <br></br>
                <label>Materials: 
                <input type='text' name='materials' value={ newCourse.materials } onChange={handleChange}/>
                </label>
                <br></br>
                <button type='submit'>SAVE</button>
                <button onClick={onCancel}>CANCEL</button>
            </form>
        </div>
    </div>
  )
}

export default AddCourseModal