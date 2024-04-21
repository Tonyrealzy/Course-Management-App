import React from 'react';

const EditCourseModal = ({ courseData, onSave, onCancel }) => {
    const [name, setName] = React.useState(courseData.name);
    const [description, setDescription] = React.useState(courseData.description);
    const [instructor, setInstructor] = React.useState(courseData.instructor);
    const [start_date, setStartDate] = React.useState(courseData.start_date);
    const [end_date, setEndDate] = React.useState(courseData.end_date);
    const [enrollment_status, setEnrollmentStatus] = React.useState(courseData.enrollment_status);
    const [materials, setMaterials] = React.useState(courseData.materials);

    const [errors, setErrors] = React.useState({});

    const validateStartDate = (date) => {
        const datePattern = /^\d{4}-\d{2}-d{2}$/;
        return datePattern.test(date);
    };
    const validateEndDate = (date) => {
        const datePattern = /^\d{4}-\d{2}-d{2}$/;
        return datePattern.test(date);
    };
    
    const handleNameChange = (event) => {
        setName(event.target.value);
        const newErrors = { ...errors };
        newErrors.name = event.target.value.trim() !== '' ? '' : 'Course name is required';
        setErrors(newErrors);
      };
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        const newErrors = { ...errors };
        newErrors.description = event.target.value.trim() !== '' ? '' : 'Course description is required';
        setErrors(newErrors);
      };
      const handleInstructorChange = (event) => {
        setInstructor(event.target.value);
        const newErrors = { ...errors };
        newErrors.instructor = event.target.value.trim() !== '' ? '' : 'Course instructor name is required';
        setErrors(newErrors);
      };
      const handleEnrollmentStatusChange = (event) => {
        setEnrollmentStatus(event.target.value);
        const newErrors = { ...errors };
        newErrors.enrollment_status = event.target.value.trim() !== '' ? '' : 'Course enrollment-status is required';
        setErrors(newErrors);
      };
      const handleMaterialsChange = (event) => {
        setMaterials(event.target.value);
        const newErrors = { ...errors };
        newErrors.materials = event.target.value.trim() !== '' ? '' : 'Course materials field is required';
        setErrors(newErrors);
      };
      const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
        const newErrors = { ...errors };
        if (validateStartDate(event.target.value)) {
            delete newErrors.start_date;
        } else {
            newErrors.start_date = 'Invalid start-date format';
        }
        // newErrors.start_date = validateStartDate(event.target.value) ? '' : 'Invalid start-date format';
        setErrors(newErrors);
      };
      const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
        const newErrors = { ...errors };
        if (validateEndDate(event.target.value)) {
            delete newErrors.start_date;
        } else {
            newErrors.end_date = 'Invalid end-date format';
        }
        // newErrors.end_date = validateEndDate(event.target.value) ? '' : 'Invalid end-date format';
        setErrors(newErrors);
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};

        if (typeof name !== 'string' || !name.trim()) {
            newErrors.name = 'Course name is required!';
        }
        if (typeof instructor !== 'string' || !instructor.trim()) {
            newErrors.instructor = 'Course instructor name is required!';
        }
        if (typeof description !== 'string' || !description.trim()) {
            newErrors.description = 'Course description is required!';
        }
        if (isNaN(new Date(start_date))) {
            newErrors.start_date = 'Invalid start-date pattern!';
        }
        if (isNaN(new Date(end_date))) {
            newErrors.end_date = 'Invalid end-date pattern!';
        }
        if (typeof enrollment_status !== 'string' || !enrollment_status.trim()) {
            newErrors.enrollment_status = 'Course enrollment-status field cannot be empty!';
        }
        if (typeof materials !== 'object' || materials.length === 0) {
            newErrors.materials = 'Course materials field must be filled!';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newCourseData = {
            name, description, instructor, start_date,
            end_date, enrollment_status, materials
        };
        onSave(newCourseData);
    };

    React.useEffect(() => {
        setName(courseData.name);
        setDescription(courseData.description);
        setInstructor(courseData.instructor);
        setStartDate(courseData.start_date);
        setEndDate(courseData.end_date);
        setEnrollmentStatus(courseData.enrollment_status);
        setMaterials(courseData.materials);
    }, [courseData]);

  return (
    <div className='modal'>
        <div className='modalContent'>
            <h2>Edit Course Details</h2>
            <form onSubmit={handleSubmit}>
                <label> Course Name: 
                    <input className='input' type='text' name='name' value={ name } onChange={handleNameChange}/>
                    {errors.name && <p className="error">{errors.name}</p>}
                </label>
                <br></br>
                <label>Description: 
                    <input className='input' type='text' name='description' value={ description } onChange={handleDescriptionChange}/>
                    {errors.description && <p className="error">{errors.description}</p>}
                </label>
                <br></br>
                <label>Instructor: 
                    <input className='input' type='text' name='instructor' value={ instructor } onChange={handleInstructorChange}/>
                    {errors.instructor && <p className="error">{errors.instructor}</p>}
                </label>
                <br></br>
                <label>Start Date: 
                <input className='input' type='text' name='start_date' value={ start_date } onChange={handleStartDateChange}/>
                {errors.start_date && <p className="error">{errors.start_date}</p>}
                </label>
                <br></br>
                <label>End Date: 
                <input className='input' type='text' name='end_date' value={ end_date } onChange={handleEndDateChange}/>
                {errors.end_date && <p className="error">{errors.end_date}</p>}
                </label>
                <br></br>
                <label>Enrollment Status: 
                <input className='input' type='text' name='enrollment_status' value={ enrollment_status } onChange={handleEnrollmentStatusChange}/>
                {errors.enrollment_status && <p className="error">{errors.enrollment_status}</p>}
                </label>
                <br></br>
                <label>Materials: 
                <input className='input' type='text' name='materials' value={ materials } onChange={handleMaterialsChange}/>
                {errors.materials && <p className="error">{errors.materials}</p>}
                </label>
                <br></br>
                <button className='courseButton' type='submit'>SAVE</button>
                <button className='courseButton' onClick={onCancel}>CANCEL</button>
            </form>
        </div>
    </div>
  )
}

export default EditCourseModal