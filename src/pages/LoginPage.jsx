import React, { useEffect, useState } from "react";

import LoginComponent from "../component/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Spin from "../component/Spin";
import { useDispatch } from "react-redux";
import { login } from "../redux/feature/cart/AuthSlice";
function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        dispatch(login(res));
        navigate("/user");
        console.log(res);
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Spin /> : <LoginComponent />;
}

export default LoginPage;
