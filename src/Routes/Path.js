import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgotPwd2 from "../Componants/Forgot Password/ForgotPwd2";
import ForgotPwd1 from "../Componants/Forgot Password/ForgotPwd1";
import Login from "../Componants/componants/Login";
import ForgotPwd from "../Componants/Forgot Password/ForgotPwd";
import ChangePwd from "../Componants/Forgot Password/ChangePwd";
import AllCategory from "../Componants/Category/AllCategory";
import AddCategory from "../Componants/Category/AddCategory";
import AddPortfolio from "../Componants/Portfolio/AddPortfolio";
import AllPortfolio from "../Componants/Portfolio/AllPortfolio";
import EditCategory from "../Componants/Category/EditCategory";
import EditPortfolio from "../Componants/Portfolio/EditPortfolio";
import AllTestimonials from "../Componants/Testimonials/AllTestimonials";
import AddTestimonials from "../Componants/Testimonials/AddTestimonials";
import EditTestimonials from "../Componants/Testimonials/EditTestimonials";
import UserEnqury from "../Componants/UserEnqury/UserEnqury";
import Profile from "../Componants/componants/Profile";
import Header from "../Componants/componants/Header";
import Front from "../Componants/componants/Front";

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* <-- Forgot Password --> */}

        <Route path="/forgotpwd1" element={<ForgotPwd1 />} />
        <Route path="/forgotpwd2" element={<ForgotPwd2 />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />

        <Route>
          {/* <-- Dashboard --> */}

          <Route path="/" element={<Front />} />

          {/* <-- Change Password --> */}

          <Route path="/changepwd" element={<ChangePwd />} />

          {/* <-- Category --> */}

          <Route path="/allcat" element={<AllCategory />} />
          <Route path="/addcat" element={<AddCategory />} />
          <Route path="/editcat/:id" element={<EditCategory />} />

          {/* <-- Portfolio --> */}

          <Route path="/allprt" element={<AllPortfolio />} />
          <Route path="/addprt" element={<AddPortfolio />} />
          <Route path="/editprt/:id" element={<EditPortfolio />} />

          {/* <-- Testimonials --> */}

          <Route path="/allt" element={<AllTestimonials />} />
          <Route path="/addt" element={<AddTestimonials />} />
          <Route path="/editt/:id" element={<EditTestimonials />} />

          {/* User Enqury */}

          <Route path="/user" element={<UserEnqury />} />

          {/* Profile */}

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Path;
