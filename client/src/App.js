import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import Navbar from './components/Navbar';

import Home from './Routes/Home'
import JobList from './Routes/JobList';
import JobDetails from './components/Job-detail';
import EmployerLogin from './Routes/EmployerLogin';
import EmployerSignup from './Routes/EmployerSignup';
import CandidateLogin from './Routes/CandidateLogin'
import Apply from './Routes/Apply'
import { EmployerContextProvider } from './context/EmployerContext';
import Footer from './components/Footer';
import { useEmployerContext } from './hooks/useEmployerContext';
import PostJob from './Routes/PostJob';
import EmployerDashboard from './Routes/EmployerDashboard';
import { useState } from 'react';
import CandidateSignup from './Routes/CandidateSignup';
import { CandidateContextProvider } from './context/CandidateContext';
import GetApp from './Routes/GetApp';
import CandidateDashboard from './Routes/CandidateDashboard';
import MyJobs from './Routes/MyJobs';
import Applications from './Routes/Applications';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <EmployerContextProvider>
      <CandidateContextProvider>
        <Navbar />
      </CandidateContextProvider>
        <Routes>
        <Route 
            path='/employer'
            element={<EmployerDashboard/>}
        />
        <Route 
              path='/employer/login'
              element={<EmployerLogin/>}
            />
            <Route 
              path='/employer/signup'
              element={<EmployerSignup/>}
            />
            <Route 
              path='/employer/jobs/'
              element={<MyJobs/>}
            />
            <Route 
              path='/:jid/applications/'
              element={<Applications/>}
            />
            <Route
              path='/employer/post-job/'
              element={<PostJob />}
            />
            
        </Routes>
        </EmployerContextProvider>

        <CandidateContextProvider>     
        <Routes>
          <Route
            path='/candidate'
            element={<CandidateDashboard/>}
          />
          <Route 
            path='/candidate/login'
            element={<CandidateLogin/>}
          />
          <Route 
            path='/candidate/signup'
            element={<CandidateSignup/>}
          />
          <Route
            path='/:jid/apply'
            element={<Apply/>}
          />
        </Routes>
        </CandidateContextProvider>

        <div className="pages">
          <Routes>
            <Route
              path='/getapp'
              element={<GetApp/>}
            />
            <Route
              path='/'
              element={<Home/>}
            />
            <Route 
              path='/joblist'
              element={<JobList/>}
            />
            <Route 
              path='/:jid/details'
              element={<JobDetails/>}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
