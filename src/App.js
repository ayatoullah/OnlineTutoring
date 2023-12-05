import './App.css';
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from './components/AuthWrapper.js';



function App() {



  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="courses" element={<Courses />}>
              <Route index element={<CourseData />} />
              <Route path="coursedata" element={<CourseData/>}/>
              <Route path="participants" element={<CourseParticipants/>} />
          </Route>
        </Routes>
      </BrowserRouter> 

      <div onClick={handleToggleClick}>
        <Chatbot/>
      </div>
      {divVisible && (
        <div><Chat/></div>
      )} */}
      <BrowserRouter>
        <AuthWrapper/>
      </BrowserRouter>
    </div>
  );
}

export default App;
