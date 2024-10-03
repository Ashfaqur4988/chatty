import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { currentUser } = useAuthContext();
  console.log(currentUser);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={currentUser ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/login"
            element={!currentUser ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!currentUser ? <SignUp /> : <Navigate to={"/"} />}
          />
          <Route path="*" element={<SignUp />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
