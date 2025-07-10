import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/home.jsx";
import Navigation from "../components/navigation.jsx";
import List from "../components/users/list.jsx";
import Add from "../components/users/add.jsx";
import Edit from "../components/users/edit.jsx";
import LoginUser from "../components/auth/login_auth.jsx";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/register" element={<LoginUser />} />
        <Route path="/edit/:id" element={<Edit />} />

        {/* <Route path="/registro" element={<Registro />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
