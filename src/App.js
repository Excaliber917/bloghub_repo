import Topbar from "./components/topbar/Topbar"
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/Contact/Contact";

function App() {
  const { user } = useContext(Context);
  // let user = false
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register" element={user ? <Homepage /> : <Register />} />
        <Route exact path="/login" element={user ? <Homepage /> : <Login />} />
        <Route exact path="/write" element={user ? <Write /> : <Login />} />
        <Route exact path="/settings" element={user ? <Settings /> : <Register />} />
        <Route exact path="/post/:postId" element={<Single />} />
      </Routes>

    </Router>
  );
}

export default App;
