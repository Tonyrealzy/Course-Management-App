import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormsPage = ({ courseToEdit, onSave, onCancel }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState(courseToEdit || {
        name: '',
        decription: '',
        instructor: '',
        start_date: '',
        end_date: '',
        enrollment_status: '',
        materials: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSave(formData);
    };

  return (
    <div>
        <h2>{courseToEdit ? courseToEdit.name : 'Add Course'}</h2>
        <form onSubmit={handleSubmit}>
            <label> Course Name: 
                <input type='text' name='name' value={ formData.name } onChange={handleChange}/>
            </label>
            <br></br>
            <label>Description: 
                <input type='text' name='description' value={ formData.description } onChange={handleChange}/>
            </label>
            <br></br>
            <label>Instructor: 
                <input type='text' name='instructor' value={ formData.instructor } onChange={handleChange}/>
            </label>
            <br></br>
            <label>Start Date: 
            <input type='text' name='start_date' value={ formData.start_date } onChange={handleChange}/>
            </label>
            <br></br>
            <label>End Date: 
            <input type='text' name='end_date' value={ formData.end_date } onChange={handleChange}/>
            </label>
            <br></br>
            <label>Enrollment Status: 
            <input type='text' name='enrollment_status' value={ formData.enrollment_status } onChange={handleChange}/>
            </label>
            <br></br>
            <label>Materials: 
            <input type='text' name='materials' value={ formData.materials } onChange={handleChange}/>
            </label>
            <br></br>
            <button type='submit'>{courseToEdit ? 'SAVE' : 'ADD'}</button>
            <button onClick={onCancel}>CANCEL</button>
        </form>
    </div>
  )
}

export default FormsPage