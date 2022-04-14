import "./App.css";
import "../src/";
import Register from "./Components/Register/Register";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
import SendParcel from "./Components/SendParcel/SendParcel";
import Home from "./Components/Home/Home";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import UpdateParcel from "./Components/UpdateParcel/UpdateParcel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="parcels/*" element={<UserDashboard />} />
        <Route path="sendparcel" element={<SendParcel />} />
        <Route path="updateparcel" element={<UpdateParcel />} />
      </Routes>
    </div>
  );
}

export default App;
