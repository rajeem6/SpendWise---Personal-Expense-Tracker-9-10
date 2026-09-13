import { useEffect, useState } from "react";
import "./App.css";
import Landing from "./Pages/Landing";
import Register from "./ui/register";
import { AppContext } from "./Context/AppContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Register2 from "./ui/register2";
import Dashboard from "./Pages/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { Auth, db } from "./firebase/firebase";

function App() {
  const [addClass2, setAddClass2] = useState(false);
  const [loginClose, setLoginClose] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signUpClose, setSignUpClose] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(Auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/dashboard");
        console.log("user authenticated");
      } else {
        setUser(null);
        navigate("/");
        console.log("user is not authenticated");
      }
    });
    return unsub;
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          addClass2,
          setAddClass2,
          setLoginClose,
          loginClose,
          signUp,
          setSignUp,
          signUpClose,
          setSignUpClose,
          user,
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Register />
        <Register2 />
      </AppContext.Provider>
    </>
  );
}

export default App;
