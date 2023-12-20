// App.js
import React from 'react';
import SurveyForm from './SurveyForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuccessPage from './success';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SurveyForm />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
