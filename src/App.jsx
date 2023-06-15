
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import AboutUs from './User/About us/AboutUs';
import Blogs from './User/Blogs/Blogs';
import Home from "./User/Home/Home";
import SingleBlog from "./User/Blogs/SingleBlog";
import AdminHome from "./Admin/Home/AdminHome";
import AdminLayout from "./Admin/Layout";
import EditBlog from "./Admin/Blog/EditBlog";
import AddBlog from "./Admin/Blog/AddBlog";
import Login from "./Auth/Login";


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/login" element={<Login/>} />

          <Route path="" element={<UserLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="/blog" element={<Blogs />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            
          </Route>
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="add" element={<AddBlog />} />
            <Route path="edit/:id" element={<EditBlog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;