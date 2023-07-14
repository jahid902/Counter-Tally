import { useState } from "react";
import app from "../../Firebase/firebase.config";
import "./Navbar.css";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import { useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign In Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Something went wrong!",
        });
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Sign out Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="logo">
            <a href="#">Counter Tally</a>
          </div>
          <div className="navlinks">
            <button type="button">
              {user?.email}
            </button>
            <button onClick={() => googleSignIn()} type="button">
              Sign In
            </button>
            {user && <button onClick={() => logOut()} type="button">
              Sign Out
            </button>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
