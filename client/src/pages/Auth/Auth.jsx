// import React, { useState } from "react";
// import "./Auth.css";
// import icon from "../../assets/logo.png";
// import eyeIcon from "../../assets/eye-icon.svg";
// import eyeSlashIcon from "../../assets/eye-slash-icon.svg";
// import AboutAuth from "./AboutAuth";
// import { signup, login } from "../../actions/auth";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";

// const Auth = () => {
//   const [isSignup, setIsSignup] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSwitch = () => {
//     setIsSignup(!isSignup);
//     setName("");
//     setEmail("");
//     setPassword("");
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email && !password) {
//       alert("Enter an email and password");
//     }
//     if (isSignup) {
//       if (!name) {
//         alert("Enter a name  to continue...");
//       }
//       dispatch(signup({ name, email, password }, navigate));
//     } else {
//       dispatch(login({ email, password }, navigate));
//     }
//   };

//   return (
//     <section className="auth-section">
//       {isSignup && <AboutAuth />}
//       <div className="auth-container">
//         {!isSignup && (
//           <img src={icon} alt="QuestionPucho" className="login-logo" />
//         )}
//         <div className="auth-form-container">
//           <h1>{isSignup ? "Create your account" : ""}</h1>
//           {isSignup && (
//             <p className="auth-agreement">
//               By clicking “Sign up”, you agree to our
//               <span className="link"> terms of service</span> and acknowledge
//               you have read our
//               <span className="link"> privacy policy</span>.
//             </p>
//           )}
//           {isSignup && (
//             <label htmlFor="username" className="user">
//               <h4 className="font">UserName</h4>
//               <input
//                 type="text"
//                 name="username"
//                 id="username"
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//               />
//             </label>
//           )}
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="email">
//               <h4 className="font">Email</h4>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />
//             </label>
//             <label htmlFor="password">
//               <div className="pass-div">
//                 <h4 className="font">Password</h4>
//                 {!isSignup && <a href="">Forgot password?</a>}

//               </div>
//               <div className="password-input-container">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   id="password"
//                   onChange={(e) => {
//                     setPassword(e.target.value);
//                   }}
//                 />
//                 <span
//                   onClick={togglePasswordVisibility}
//                   className="toggle-password-visibility"
//                 >
//                   <img
//                     src={showPassword ? eyeSlashIcon : eyeIcon}
//                     alt={showPassword ? "Hide password" : "Show password"}
//                     width="24"
//                     height="24"
//                   />
//                 </span>
//               </div>
//               {isSignup && (
//                 <p className="password-requirements">
//                   Must contain 8 characters, including at least 1 letter and 1
//                   number
//                 </p>
//               )}
//             </label>
//             <button type="submit" className="auth-btn">
//               {isSignup ? "Sign up" : "Log in"}
//             </button>
//             <hr />
//           </form>
//         </div>
//         <p className="text">
//           {isSignup ? "Already have an account?" : "Don't have an account?  "}
//           <button
//             type="button"
//             className="handle-switch-btn"
//             onClick={handleSwitch}
//           >
//             {isSignup ? (
//               <span style={{ color: "#1B75D0" }}> Log in</span>
//             ) : (
//               <span style={{ color: "#1B75D0" }}> Sign up</span>
//             )}
//           </button>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Auth;

import React, { useState } from "react";
import icon from "../../assets/logo.png";
import eyeIcon from "../../assets/eye-icon.svg";
import eyeSlashIcon from "../../assets/eye-slash-icon.svg";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter an email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue...");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-4xl">
        <div>
          {" "}
          {!isSignup && (
            <img
              src={icon}
              alt="Logo"
              className="items-center justify-center w-full"
            />
          )}
        </div>{" "}
        {/* Right side (Auth form) */}
        <div className="flex flex-row items-center justify-center w-full md:w-1/2">
          <div className="bg-gradient-to-tr from-pink-200 to-blue-200 p-6 rounded-lg shadow-md w-full max-w-sm">
            {isSignup && (
              <h1 className="text-xl font-semibold text-center mb-4">
                Create your account
              </h1>
            )}

            {isSignup && (
              <p className="text-xs text-gray-700 mb-4 text-center">
                By clicking “Sign up”, you agree to our
                <span className="text-blue-600"> terms of service</span> and
                acknowledge you have read our
                <span className="text-blue-600"> privacy policy</span>.
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {isSignup && (
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  {!isSignup && (
                    <a
                      href="#"
                      className="text-xs text-blue-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-2.5 cursor-pointer"
                  >
                    <img
                      src={showPassword ? eyeSlashIcon : eyeIcon}
                      alt={showPassword ? "Hide password" : "Show password"}
                      className="h-5 w-5"
                    />
                  </span>
                </div>
                {isSignup && (
                  <p className="text-xs text-gray-600 mt-1">
                    Must contain 8 characters, including at least 1 letter and 1
                    number
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
              >
                {isSignup ? "Sign up" : "Log in"}
              </button>
            </form>

            <hr className="my-4 border-gray-300" />

            <p className="text-sm text-center">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={handleSwitch}
                className="text-blue-600 font-medium hover:underline"
              >
                {isSignup ? "Log in" : "Sign up"}
              </button>
            </p>
          </div>
        </div>
        {isSignup && (
          <div className="hidden md:flex flex-col justify-center items-start w-1/2 pr-6">
            <AboutAuth />
          </div>
        )}
      </div>
    </section>
  );
};

export default Auth;
