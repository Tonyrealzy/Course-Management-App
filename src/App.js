import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import PageLayout from './components/PageLayout';
import ListCourses from './components/ListCourses';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
          <PageLayout>
            <ListCourses/>
          </PageLayout>}/>

          <Route path='/courses/:courseId' element={
          <PageLayout>
            <CourseDetails/>
          </PageLayout>}/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
