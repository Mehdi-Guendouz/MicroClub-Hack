import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
<<<<<<< HEAD
import axios from "axios";
import { SignIn } from "./pages/SignIn";

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

=======

import { Dashboard } from "./pages/Dashboard";

import { SignIn } from "./pages/SignIn";

>>>>>>> 3479a74ec6d758d5e5d90b1cdf3e00bdd3b0c021

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signUp" element={<SignUp />} />

          <Route exact path="/dashbord" element={<Dashboard />} />

          <Route exact path="/signIn" element={<SignIn />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
