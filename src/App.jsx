import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main1 from './pages/Main1';
import Main2 from './pages/Main2';
import Main3 from './pages/Main3';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect base URL to main page */}
        <Route path="/" element={<Navigate to="/logic-page/analyzer/m1" />} />
        
        {/* Your 3 Landing Pages */}
        <Route path="/logic-page/analyzer/m1" element={<Main1 />} />
        <Route path="/logic-page/secure/access-point" element={<Main2 />} />
        <Route path="/logic-page/terminal/live-signals" element={<Main3 />} />
      </Routes>
    </Router>
  );
};

export default App;