import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePages from "./Pages/Website/HomePages";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Dashboard/Users";
import Products from "./Pages/Dashboard/Products";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        <Route path="Dashboard" element={<Dashboard />}>
          <Route path="Users" element={<Users />} />
          <Route path="Products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}
