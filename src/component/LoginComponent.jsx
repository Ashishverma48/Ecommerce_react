import React, { useEffect, useState } from "react";
import { logo } from "../assets/index";
import Input from "../component/Input";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { googleSignInApi, loginApi } from "../api/FirebaseAuthApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
function LoginComponent() {
  const navigate = useNavigate(null);
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: yup.object({
      Email: yup
        .string()
        .required("Email Is Required")
        .email("Email Not Valid"),
      Password: yup.string().required("Password Is Required"),
    }),
    onSubmit: async (value) => {
      try {
        const res = await loginApi(value.Email, value.Password);
        toast.success("Login Successfully");
        console.log(res);
        navigate("/user");
      } catch (error) {
        console.log(error);
        toast.error("Invlaid Email Or Password");
      }
    },
  });

  const googleLogin = async () => {
    try {
      const res = await googleSignInApi();
      console.log(res);
    } catch (error) {}
  };
  return (
    <div className=" flex  justify-center mt-5  px-4">
      <div className="md:w-1/3 w-full block pb-3 p-1 px-5 shadow-xl rounded-sm">
        <div className=" mb-3 ">
          <img src={logo} className="w-[200px] " alt="" />
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <Input
            label="Email"
            type="email"
            error={formik.errors.Email}
            placeholder="Enter Email Address"
            propsValue={{ ...formik.getFieldProps("Email") }}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            error={formik.errors.Password}
            propsValue={{ ...formik.getFieldProps("Password") }}
          />
          <div className="flex  flex-col items-center gap-3 mt-2">
            <button
              type="submit"
              className="py-1.5 px-5 font-semibold rounded-sm mt-3 w-1/2 text-white bg-blue-500"
            >
              Login
            </button>
            <div className="w-full h-[1.7px] bg-gray-400 rounded-sm"></div>
            <GoogleButton className="rounded-sm" onClick={googleLogin} />
            <div className="w-full h-[1.3px] bg-gray-400 rounded-sm"></div>
            <div className="flex gap-4 mt-3">
              <p>Create New Account</p>

              <Link to="/signup" className="font-semibold text-blue-600">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
