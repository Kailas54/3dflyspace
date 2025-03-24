import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/metaverse" element={<Home />} />
        <Route path="/admin" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
