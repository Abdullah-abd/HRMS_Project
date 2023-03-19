import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Employee from './Components/Employee';
// import LeftSidebar from './Components/LeftSidebar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AuthProvider } from './context/authProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Employee' element={<Employee/>}/>
        <Route path='/AdminPage'/>
        
      </Routes>
    </Router>
  </AuthProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
