import React, { useEffect, useState } from "react";

import LoginComponent from "../component/LoginComponent";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Spin from "../component/Spin";

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/user");
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Spin /> : <LoginComponent />;
}

export default LoginPage;
