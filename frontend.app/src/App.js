import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Pages/Login/Login.jsx";
//import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
//import DutiesPage from "./Pages/Duties/DutiesPage.jsx";
//import Reports from "./Pages/Report/Reports";



function App() {
  return <Router>

    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>

  </Router>;
}

export default App;
