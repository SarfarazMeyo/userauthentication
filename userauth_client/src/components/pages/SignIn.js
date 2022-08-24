import React, { useState } from "react";
import "./formstyle.css";
import { Link, NavLink } from "react-router-dom";

const SignIn = () => {
  const [inpval, setInpval] = useState({
    email: "",
    password: "",
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

  const loginuser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      alert("email is required!", {
        position: "top-center",
      });
    } else if (password === "") {
      alert("password is required!", {
        position: "top-center",
      });
    } else {
      // console.log("user registration succesfully done");

      // const data = await fetch("/register", {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //         fname, email, password, cpassword
      //     })
      // });

      // const res = await data.json();
      // // console.log(res.status);

      // if (res.status === 201) {
      alert("Loged In Successfully done 😃!", {
        position: "top-center",
      });
      setInpval({
        ...inpval,
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="d-flex py-5 justify-content-center ">
      <div className="w-50">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              onChange={setVal}
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={inpval.email}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              onChange={setVal}
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={inpval.password}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={loginuser}
            >
              Submit
            </button>
          </div>

          <p className="text-right">
            Already have an account? <NavLink to="/signup">SignUp</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
