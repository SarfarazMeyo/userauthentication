import React, { useState } from "react";
import "./formstyle.css";
import { Link, NavLink } from "react-router-dom";

const SignUp = () => {
  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();

    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      alert("fname is required!", {
        position: "top-center",
      });
    } else if (email === "") {
      alert("email is required!", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      alert("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      alert("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      alert("password must be 6 char!", {
        position: "top-center",
      });
    } else if (cpassword === "") {
      alert("cpassword is required!", {
        position: "top-center",
      });
    } else if (cpassword.length < 6) {
      alert("confirm password must be 6 char!", {
        position: "top-center",
      });
    } else if (password !== cpassword) {
      alert("pass and Cpass are not matching!", {
        position: "top-center",
      });
    } else {
      console.log("user registration succesfully done");

      const data = await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          password,
          cpassword,
        }),
      });

      const res = await data.json();
      console.log(res.status);

      if (res.status === 201) {
        alert("Registration Successfully done 😃!", {
          position: "top-center",
        });
        setInpval({
          ...inpval,
          fname: "",
          email: "",
          password: "",
          cpassword: "",
        });
      }
    }
  };
  return (
    <div className="d-flex py-5 justify-content-center ">
      <div className="w-50">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              onChange={setVal}
              placeholder="First name"
              name="fname"
              value={inpval.fname}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={setVal}
              placeholder="Enter email"
              name="email"
              value={inpval.email}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={setVal}
              placeholder="Enter password"
              name="password"
              value={inpval.password}
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              onChange={setVal}
              placeholder="Enter password"
              name="cpassword"
              value={inpval.cpassword}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={addUserdata}
            >
              Sign Up
            </button>
          </div>
          <p>
            Already have an account? <NavLink to="/signin">Log In</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
