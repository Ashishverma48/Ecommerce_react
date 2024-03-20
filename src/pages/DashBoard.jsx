import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Spin from "../component/Spin";
import { handleSignOut } from "../api/FirebaseAuthApi";
import { logout } from "../redux/feature/cart/AuthSlice";
function DashBoard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/login");
      } else {
        setLoading(false);
        setUser(res);
      }
    });
  }, []);
  return loading ? (
    <Spin />
  ) : (
    <div className="w-full h-screen p-10">
      <h2 className="font-semibold">
        Name :{" "}
        <span className="text-2xl"> {user?.displayName?.toUpperCase()}</span>{" "}
      </h2>
      <h2 className="font-semibold">
        Email : <span className="text-2xl"> {user.email}</span>{" "}
      </h2>

      <button
        className="bg-red-100 py-2 px-10 rounded-md cursor-pointer"
        onClick={() => {
          handleSignOut();
          navigate(logout);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default DashBoard;
