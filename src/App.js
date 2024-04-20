import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import ListCourses from './components/ListCourses';
import FormsPage from './components/FormsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ListCourses/>}/>
          <Route path='/courses/:courseId' element={<CourseDetails/>}/>
          <Route path='/forms' element={<FormsPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
