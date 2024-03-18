import React from "react";
import { logo } from "../assets/index";
import Input from "../component/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { RegisterApi } from "../api/FirebaseAuthApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
    validationSchema: yup.object({
      Name: yup.string().required("Name Is Required"),
      Email: yup.string().required("Email Is Required").email("Invalid Email"),
      Password: yup
        .string()
        .required("Password is Required")
        .min(8, "Password To Short")
        .max(12, "Passwors To Long"),
      ConfirmPassword: yup
        .string()
        .required("Confirm Password is Required")
        .oneOf([yup.ref("Password"), null], "Confirm Password Not Match"),
    }),
    onSubmit: async (value, { resetForm }) => {
      try {
        const response = await RegisterApi(
          value.Name,
          value.Email,
          value.Password
        );
        console.log(response);
        if (response === null) {
          toast.success("Registration Successful");
          resetForm(); // Reset the form
        } else if (response.code === "auth/email-already-in-use") {
          toast.error("Email is already in use");
        } else {
          toast.error("Registration Failed");
        }
      } catch (error) {
        toast.error("Registration Failed");
        console.error("Error during registration:", error);
        console.log("error", error);
      }
    },
  });

  return (
    <div className=" flex  justify-center mt-5  px-4">
      <div className="md:w-1/3 w-full block pb-3 p-1 px-3 shadow-xl rounded-sm">
        <div className=" ">
          <img src={logo} className="w-[200px]" alt="" />
        </div>
        <form
          className="flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <Input
            label="Name"
            error={formik.errors.Name}
            type="text"
            placeholder="Enter Name"
            propsValue={{ ...formik.getFieldProps("Name") }}
          />
          <Input
            type="text"
            error={formik.errors.Email}
            label="Email"
            placeholder="Enter Email"
            propsValue={{ ...formik.getFieldProps("Email") }}
          />
          <Input
            type="password"
            error={formik.errors.Password}
            label="Password"
            placeholder="Enter Password"
            propsValue={{ ...formik.getFieldProps("Password") }}
          />
          <Input
            error={formik.errors.ConfirmPassword}
            type="password"
            label="ConfirmPassword"
            placeholder="Enter Confirm Password"
            propsValue={{ ...formik.getFieldProps("ConfirmPassword") }}
          />

          <button className="mt-5 text-white py-2 px-5 bg-indigo-600 hover:bg-indigo-700 duration-200 w-2/4 mx-auto rounded-sm shadow-2xl">
            Register
          </button>
        </form>
        <div className="mt-3 justify-center flex gap-4">
          <p>Already Have An Account</p>
          <Link to="/login" className="font-semibold text-blue-600 ">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
