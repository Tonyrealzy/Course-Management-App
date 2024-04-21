import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import PageLayout from './components/PageLayout';
import ListCourses from './components/ListCourses';
import Home from './components/Home';
import AddCourseModal from './components/AddCourseModal';
import EditCourseModal from './components/EditCourseModal';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
          <PageLayout>
            <Home/>
          </PageLayout>}/>

          <Route path='/courses/:courseId' element={
          <PageLayout>
            <CourseDetails/>
          </PageLayout>}/>

          <Route path='/courses' element={
            <PageLayout>
              <ListCourses/>
            </PageLayout>
          }/>

          <Route path='/add-course' element={
            <PageLayout>
              <AddCourseModal/>
            </PageLayout>
          }/>

          <Route path='/edit-course' element={
            <PageLayout>
              <EditCourseModal/>
            </PageLayout>
          }/>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
