import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserInfoForm from './components/Quiz/UserInfoForm';
import Quiz from './components/Quiz/Quiz';
// import QRCodeDisplay from './components/Quiz/QRCodeDisplay';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path="/" element={<QRCodeDisplay />} /> */}
        <Route path="/" element={<UserInfoForm />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
