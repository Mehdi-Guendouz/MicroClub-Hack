import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import axios from "axios";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import { USerProfilePage } from "./pages/Profile";
import { ViewData } from "./pages/ViewData";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

import Upload from "./pages/Upload";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
function App() {
  return (
    <div className="App overflow-x-hidden ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/profile" element={<USerProfilePage />} />
          <Route exact path="/View your data" element={<ViewData />} />
          <Route exact path="/upload" element={<Upload />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
