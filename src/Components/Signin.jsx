


// import React, { useState, useRef, useEffect } from "react";
// import background_image from "../assets/homepharma.png";
// import logo from "../assets/logo2.png";
// import { Link, useNavigate } from "react-router-dom";
// import { TextField } from "@mui/material";
// import refresh from "../assets/reload-arrow (1).png";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { InputAdornment, IconButton } from "@mui/material";
// import {
//   getUserByCustomerIdApi,
//   loginUserApi,
//   logoutUserApi,
// } from "../Api/UserApi";
// const OTPInput = ({ length, onChangeOTP }) => {
//   const [otp, setOTP] = useState(new Array(length).fill(""));
//   const inputRefs = useRef([]);

//   const handleChange = (element, index) => {
//     const value = element.value.replace(/[^0-9]/g, "");
//     if (value) {
//       const newOTP = [...otp];
//       newOTP[index] = value;
//       setOTP(newOTP);
//       if (index < length - 1) {
//         inputRefs.current[index + 1].focus();
//       }
//       onChangeOTP(newOTP.join(""));
//     }
//   };

//   const handleBackspace = (element, index) => {
//     if (element.value === "") {
//       if (index > 0) {
//         inputRefs.current[index - 1].focus();
//       }
//     }
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       {otp.map((data, index) => (
//         <input
//           key={index}
//           type="text"
//           value={data}
//           maxLength="1"
//           onChange={(e) => handleChange(e.target, index)}
//           onKeyDown={(e) =>
//             e.key === "Backspace" && handleBackspace(e.target, index)
//           }
//           ref={(el) => (inputRefs.current[index] = el)}
//           className="w-[22px] h-[22px] flex border rounded-md border-gray-500 mx-1"
//         />
//       ))}
//     </div>
//   );
// };

// const Signin = () => {
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     captcha: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const [token, setToken] = useState("");
//   const nav = useNavigate();

//   useEffect(() => {
//     logoutUserApi();
//   }, []);

//   function generateCaptcha() {
//     return Math.floor(10000 + Math.random() * 90000).toString();
//   }
//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRefresh = () => {
//     setCaptcha(generateCaptcha()); // Example new captcha value
//   };

//   const validate = () => {
//     let errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.email) {
//       errors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       errors.email = "Email is not valid";
//     }

//     if (!formData.password) {
//       errors.password = "Password is required";
//     }

//     if (!formData.captcha) {
//       errors.captcha = "Captcha is required";
//     } else if (formData.captcha !== captcha) {
//       errors.captcha = "Captcha not matched";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (validate()) {
//       const userId = await loginUserApi(formData.email, formData.password);
//       if (userId) {
//         await getUserByCustomerIdApi(userId);

//         setFormData({ email: "", password: "", captcha: "" });
//         setErrors({});
//         nav("/");
//       }
//     }
//   };
//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };


//   return (
//     <div className="h-screen w-screen ">
//       <img
//         src={background_image}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           zIndex: -1,
//         }}
//       />

//       <div className="w-full h-75% ml-2 ">
//         <Link to="/">
//           <img src={logo} style={{ width: "220px" }} />
//         </Link>
//         <div className="h-full flex justify-center items-center">
//           <div className="bg-white w-[550px] border rounded-lg flex flex-col justify-center items-center shadow-lg">
//             <h2 className="text-blue-900 text-[25px] font-bold my-8">
//               Sign-In
//             </h2>
//             <form
//               onSubmit={handleSubmit}
//               className="w-full h-full flex flex-col justify-center items-center"
//             >
//               <div className="w-[60%] justify-center items-center h-full flex flex-col">
//                 <div className="flex w-[80%] items-center justify-center">
//                   <TextField
//                     label="Email"
//                     id="outlined-size-small"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     error={!!errors.email}
//                     size="small"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="flex w-[80%] items-center justify-center my-4">
//                   <TextField
//                     className="w-full"
//                     label="Password"
//                     id="outlined-size-small"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     error={!!errors.password}
//                     helperText={formData.password.length > 0 && errors.password}
//                     size="small"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton
//                             aria-label="toggle password visibility"
//                             onClick={handleClickShowPassword}
//                             edge="end"
//                           >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </div>

//                 <div className="flex justify-center items-center my-2">
//                   <div className="flex border rounded-md bg-slate-200 p-2 mx-2">
//                     <div className="text-xl font-bold mt-1">{captcha}</div>
//                     <button
//                       onClick={handleRefresh}
//                       className="bg-gray-500 text-white w-8 mx-1 h-8"
//                     >
//                       <img src={refresh} alt="Refresh" />
//                     </button>
//                   </div>
//                   <TextField
//                     name="captcha"
//                     type="text"
//                     value={formData.captcha}
//                     onChange={handleInputChange}
//                     className="p-2 mx-2"
//                     id="standard-basic"
//                     label="Enter Captcha"
//                     variant="standard"
//                     error={!!errors.captcha}
//                     helperText={formData.captcha !== captcha && errors.captcha}
//                   />
//                 </div>

//                 <div className="flex justify-center my-2">
//                   <button
//                     type="submit"
//                     className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px]"
//                   >
//                     Sign In
//                   </button>
//                 </div>

//                 <div className="flex justify-center  w-96">
//                   <label className="text-[18px] text-blue-900">
//                     <Link to="/password">Forgot Password </Link>
//                   </label>
                
//                 </div>
//                 <div>
//                 <label className="text-[18px]  text-blue-900">
//                     New User ?{" "}
//                     <Link className="underline hover:text-red-500" to="/signup">
//                       Sign Up
//                     </Link>
//                   </label>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;



// import React, { useState, useEffect } from "react";
// import background_image from "../assets/homepharma.png";
// import logo from "../assets/logo2.png";
// import { Link, useNavigate } from "react-router-dom";
// import { TextField } from "@mui/material";
// import refresh from "../assets/reload-arrow (1).png";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { InputAdornment, IconButton } from "@mui/material";
// import {
//   getUserByCustomerIdApi,
//   loginUserApi,
//   logoutUserApi,
// } from "../Api/UserApi";

// const Signin = () => {
//   const [captcha, setCaptcha] = useState(generateCaptcha());
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     captcha: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const nav = useNavigate();

//   useEffect(() => {
//     logoutUserApi();
//   }, []);

//   function generateCaptcha() {
//     return Math.floor(10000 + Math.random() * 90000).toString();
//   }

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleRefresh = () => {
//     setCaptcha(generateCaptcha()); // Example new captcha value
//   };

//   const validate = () => {
//     let errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!formData.email) {
//       errors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//       errors.email = "Email is not valid";
//     }

//     if (!formData.password) {
//       errors.password = "Password is required";
//     }

//     if (!formData.captcha) {
//       errors.captcha = "Captcha is required";
//     } else if (formData.captcha !== captcha) {
//       errors.captcha = "Captcha not matched";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setErrors({}); // Clear previous errors

//     if (validate()) {
//       try {
//         const userId = await loginUserApi(formData.email, formData.password);

//         if (userId) {
//           // Login successful, navigate to the homepage
//           await getUserByCustomerIdApi(userId);
//           setFormData({ email: "", password: "", captcha: "" });
//           nav("/");
//         } else {
//           // Login failed, specific incorrect email/password error
//           setErrors((prevErrors) => ({
//             ...prevErrors,
//             general: "Incorrect email or password",
//           }));
//         }
//       } catch (error) {
//         // Handle network/API errors
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           general: "Login failed. Please try again later.",
//         }));
//       }
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="h-screen w-screen">
//       <img
//         src={background_image}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           zIndex: -1,
//         }}
//       />

//       <div className="w-full h-75% ml-2">
//         <Link to="/">
//           <img src={logo} style={{ width: "220px" }} />
//         </Link>
//         <div className="h-full flex justify-center items-center">
//           <div className="bg-white w-[550px] border rounded-lg flex flex-col justify-center items-center shadow-lg">
//             <h2 className="text-blue-900 text-[25px] font-bold my-8">
//               Sign-In
//             </h2>
            
//             {/* Display error messages above the form */}
           

//             <form
//               onSubmit={handleSubmit}
//               className="w-full h-full flex flex-col justify-center items-center"
//             >
//               <div className="w-[60%] justify-center items-center h-full flex flex-col">
//                 <div className="flex w-[80%] items-center justify-center">
//                   <TextField
//                     label="Email"
//                     id="outlined-size-small"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     error={!!errors.email}
//                     size="small"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="flex w-[80%] items-center justify-center my-4">
//                   <TextField
//                     className="w-full"
//                     label="Password"
//                     id="outlined-size-small"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     error={!!errors.password}
//                     helperText={errors.password}
//                     size="small"
//                     InputProps={{
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton
//                             aria-label="toggle password visibility"
//                             onClick={handleClickShowPassword}
//                             edge="end"
//                           >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 </div>
//                 {errors.general && (
//               <div className="w-[80%] -mt-4 text-red-500 text-center">
//                 {errors.general}
//               </div>
//             )}

//                 <div className="flex justify-center items-center my-2">
//                   <div className="flex border rounded-md bg-slate-200 p-2 mx-2">
//                     <div className="text-xl font-bold mt-1">{captcha}</div>
//                     <button
//                       onClick={handleRefresh}
//                       className="bg-gray-500 text-white w-8 mx-1 h-8"
//                     >
//                       <img src={refresh} alt="Refresh" />
//                     </button>
//                   </div>
//                   <TextField
//                     name="captcha"
//                     type="text"
//                     value={formData.captcha}
//                     onChange={handleInputChange}
//                     className="p-2 mx-2"
//                     id="standard-basic"
//                     label="Enter Captcha"
//                     variant="standard"
//                     error={!!errors.captcha}
//                     helperText={errors.captcha}
//                   />
//                 </div>

//                 <div className="flex justify-center my-2">
//                   <button
//                     type="submit"
//                     className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px]"
//                   >
//                     Sign In
//                   </button>
//                 </div>

//                 <div className="flex justify-center w-96">
//                   <label className="text-[18px] text-blue-900">
//                     <Link to="/password">Forgot Password </Link>
//                   </label>
//                 </div>
//                 <div>
//                   <label className="text-[18px] text-blue-900">
//                     New User?{" "}
//                     <Link className="underline hover:text-red-500" to="/signup">
//                       Sign Up
//                     </Link>
//                   </label>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signin;

import React, { useState, useEffect } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import refresh from "../assets/reload-arrow (1).png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { InputAdornment, IconButton } from "@mui/material";
import {
  getUserByCustomerIdApi,
  loginUserApi,
  logoutUserApi,
} from "../Api/UserApi";

const Signin = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    captcha: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    logoutUserApi();
  }, []);

  function generateCaptcha() {
    return Math.floor(10000 + Math.random() * 90000).toString();
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Email is not valid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (!formData.captcha) {
      errors.captcha = "Captcha is required";
    } else if (formData.captcha !== captcha) {
      errors.captcha = "Captcha not matched";
      handleRefresh(); // Regenerate CAPTCHA on incorrect submission
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({}); // Clear previous errors

    if (validate()) {
      try {
        const userId = await loginUserApi(formData.email, formData.password);

        if (userId) {
          // Login successful, navigate to the homepage
          await getUserByCustomerIdApi(userId);
          setFormData({ email: "", password: "", captcha: "" });
          nav("/");
        } else {
          // Login failed, specific incorrect email/password error
          setErrors((prevErrors) => ({
            ...prevErrors,
            general: "Incorrect email or password",
          }));
        }
      } catch (error) {
        // Handle network/API errors
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: "Login failed. Please try again later.",
        }));
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-screen w-screen">
      <img
        src={background_image}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />

      <div className="w-full h-75% ml-2">
        <Link to="/">
          <img src={logo} style={{ width: "220px" }} />
        </Link>
        <div className="h-full flex justify-center items-center">
          <div className="bg-white w-[550px] border rounded-lg flex flex-col justify-center items-center shadow-lg">
            <h2 className="text-blue-900 text-[25px] font-bold my-8">
              Sign-In
            </h2>

            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col justify-center items-center"
            >
              <div className="w-[60%] justify-center items-center h-full flex flex-col">
                <div className="flex w-[80%] items-center justify-center">
                  <TextField
                    label="Email"
                    id="outlined-size-small"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!errors.email}
                    size="small"
                    className="w-full"
                  />
                </div>
                <div className="flex w-[80%] items-center justify-center my-4">
                  <TextField
                    className="w-full"
                    label="Password"
                    id="outlined-size-small"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                {errors.general && (
                  <div className="w-[80%] -mt-4 text-red-500 text-center">
                    {errors.general}
                  </div>
                )}

                <div className="flex justify-center items-center my-2">
                  <div className="flex border rounded-md bg-slate-200 p-2 mx-2">
                    <div className="text-xl font-bold mt-1">{captcha}</div>
                    <button
                      type="button"
                      onClick={handleRefresh}
                      className="bg-gray-500 text-white w-8 mx-1 h-8"
                    >
                      <img src={refresh} alt="Refresh" />
                    </button>
                  </div>
                  <TextField
                    name="captcha"
                    type="text"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    className="p-2 mx-2"
                    id="standard-basic"
                    label="Enter Captcha"
                    variant="standard"
                    error={!!errors.captcha}
                    helperText={errors.captcha}
                  />
                </div>

                <div className="flex justify-center my-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px]"
                  >
                    Sign In
                  </button>
                </div>

                <div className="flex justify-center w-96">
                  <label className="text-[18px] text-blue-900">
                    <Link to="/password">Forgot Password </Link>
                  </label>
                </div>
                <div>
                  <label className="text-[18px] text-blue-900">
                    New User?{" "}
                    <Link className="underline hover:text-red-500" to="/signup">
                      Sign Up
                    </Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

