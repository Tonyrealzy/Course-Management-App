import React from 'react';

const EditCourseModal = ({ courseData, onSave, onCancel }) => {
    const [name, setName] = React.useState(courseData.name);
    const [description, setDescription] = React.useState(courseData.description);
    const [instructor, setInstructor] = React.useState(courseData.instructor);
    const [start_date, setStartDate] = React.useState(courseData.name);
    const [end_date, setEndDate] = React.useState(courseData.name);
    const [enrollment_status, setEnrollmentStatus] = React.useState(courseData.name);
    const [materials, setMaterials] = React.useState(courseData.name);

    const handleSubmit = async (event) => {
        event.preventDefault();
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
                    <input type='text' name='name' value={ name } onChange={(e) => setName(e.target.value)}/>
                </label>
                <br></br>
                <label>Description: 
                    <input type='text' name='description' value={ description } onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <br></br>
                <label>Instructor: 
                    <input type='text' name='instructor' value={ instructor } onChange={(e) => setInstructor(e.target.value)}/>
                </label>
                <br></br>
                <label>Start Date: 
                <input type='text' name='start_date' value={ start_date } onChange={(e) => setStartDate(e.target.value)}/>
                </label>
                <br></br>
                <label>End Date: 
                <input type='text' name='end_date' value={ end_date } onChange={(e) => setEndDate(e.target.value)}/>
                </label>
                <br></br>
                <label>Enrollment Status: 
                <input type='text' name='enrollment_status' value={ enrollment_status } onChange={(e) => setEnrollmentStatus(e.target.value)}/>
                </label>
                <br></br>
                <label>Materials: 
                <input type='text' name='materials' value={ materials } onChange={(e) => setMaterials(e.target.value)}/>
                </label>
                <br></br>
                <button type='submit'>SAVE</button>
                <button onClick={onCancel}>CANCEL</button>
            </form>
        </div>
    </div>
  )
}

export default EditCourseModal