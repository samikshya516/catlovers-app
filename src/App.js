import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Journal from './pages/Journal';
import Circles from './pages/Circles';
import Profile from './pages/Profile';
import CircleDetail from './pages/CircleDetail';
import ThreadPage from './pages/ThreadPage';
import NewThreadForm from "./pages/NewThreadForm";


 




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/circles" element={<Circles />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/circles/:circleId" element={<CircleDetail />} />
        <Route path="/circles/:circleId/threads/:threadId" element={<ThreadPage />} />
        <Route path="/circles/:circleId/new-thread" element={<NewThreadForm />} />


      </Routes>
    </Router>
  );
}

export default App;
