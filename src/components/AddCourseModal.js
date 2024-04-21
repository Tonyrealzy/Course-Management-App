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

    const [errors, setErrors] = React.useState({});

    const validateName = (name) => {
        return name.trim() !== '';
    };
    const validateDate = (date) => {
        const datePattern = /^\d{4}-\d{2}-d{2}$/;
        return datePattern.test(date);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewCourse({ ...newCourse, [name]: value });

        const newErrors = { ...errors };
        switch (name) {
            case 'name':
                newErrors.name = validateName(value) ? '' : 'Course name is required!';
                break;
            case 'description':
                newErrors.description = value.trim() !== '' ? '' : 'Course description is required!';
                break;
            case 'instructor':
                newErrors.instructor = value.trim() !== '' ? '' : 'Instructor name is required!';
                break;
            case 'start_date':
                newErrors.start_date = validateDate(value) ? '' : 'Invalid date format!';
                break;
            case 'end_date':
                newErrors.end_date = validateDate(value) ? '' : 'Invalid date format!';
                break;
            case 'enrollment_status':
            newErrors.enrollment_status = value.trim() !== '' ? '' : 'PLease fill in your course enrollment status!';
                break;
            case 'materials':
                newErrors.materials = value.trim() !== '' ? '' : 'Instructional materials field cannot be left empty!';
                break;
            default:
                break;
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {};

        if (!validateName(newCourse.name)) {
            newErrors.name = 'Course name is required!';
        }
        if (!validateName(newCourse.instructor)) {
            newErrors.instructor = 'Course instructor name is required!';
        }
        if (!validateName(newCourse.description)) {
            newErrors.description = 'Course description is required!';
        }
        if (!validateName(newCourse.start_date)) {
            newErrors.start_date = 'Invalid date pattern!';
        }
        if (!validateName(newCourse.end_date)) {
            newErrors.start_date = 'Invalid date pattern!';
        }
        if (!validateName(newCourse.enrollment_status)) {
            newErrors.enrollment_status = 'Course enrollment-status field cannot be empty!';
        }
        if (!validateName(newCourse.materials)) {
            newErrors.materials = 'Course materials field must be filled!';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSave(newCourse);
    };

  return (
    <div className='modal'>
        <div className='modalContent'>
        <h2>Add Course</h2>
            <form onSubmit={handleSubmit}>
                <label> Course Name: 
                    <input type='text' name='name' value={ newCourse.name } onChange={handleChange} />
                    {errors.name && <p className='error'>{errors.name}</p>}
                </label>
                <br></br>
                <label>Description: 
                    <input type='text' name='description' value={ newCourse.description } onChange={handleChange}/>
                    {errors.description && <p className="error">{errors.description}</p>}
                </label>
                <br></br>
                <label>Instructor: 
                    <input type='text' name='instructor' value={ newCourse.instructor } onChange={handleChange}/>
                    {errors.instructor && <p className="error">{errors.instructor}</p>}
                </label>
                <br></br>
                <label>Start Date: 
                <input type='text' name='start_date' value={ newCourse.start_date } onChange={handleChange}/>
                {errors.start_date && <p className="error">{errors.start_date}</p>}
                </label>
                <br></br>
                <label>End Date: 
                <input type='text' name='end_date' value={ newCourse.end_date } onChange={handleChange}/>
                {errors.end_date && <p className='error'>{errors.end_date}</p>}
                </label>
                <br></br>
                <label>Enrollment Status: 
                <input type='text' name='enrollment_status' value={ newCourse.enrollment_status } onChange={handleChange}/>
                {errors.enrollment_status && <p className="error">{errors.enrollment_status}</p>}
                </label>
                <br></br>
                <label>Materials: 
                <input type='text' name='materials' value={ newCourse.materials } onChange={handleChange}/>
                {errors.materials && <p className="error">{errors.materials}</p>}
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