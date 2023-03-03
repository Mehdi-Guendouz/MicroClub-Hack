import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";

import { Dashboard } from "./pages/Dashboard";

import { SignIn } from "./pages/SignIn";


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
