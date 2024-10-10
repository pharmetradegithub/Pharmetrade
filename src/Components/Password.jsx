// import React, { useState } from "react";
// import background_image from "../assets/homepharma.png";
// import logo from "../assets/logo2.png";
// import FormControl from "@mui/material/FormControl";
// import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

// // import Otp from './Otp';
// import { Link } from "react-router-dom";
// const Password = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     let errors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!email) {
//       errors.email = "Email is required";
//     } else if (!emailRegex.test(email_id)) {
//       errors.email = "Email is not valid";
//     }

//     if (!password) {
//       errors.password = "Password is required";
//     } else if (password.length < 6) {
//       errors.password = "Password must be at least 6 characters long";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (validate()) {
//       // Handle form submission
//       console.log("Form submitted successfully");
//       // Reset form
//       setEmail("");
//       setPassword("");
//       setErrors({});
//     }
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
//       <div className="w-full h-full ">
//         <Link to="/">
//           <img src={logo} style={{ width: "220px" }} />
//         </Link>

//         <div className=" h-full flex justify-center items-center">
//           <div className="bg-white  w-[550px] border rounded-lg  flex flex-col justify-center items-center shadow-lg">
//             <form
//               onSubmit={handleSubmit}
//               className="w-full h-full flex  justify-center my-8"
//             >
//               <div className="w-full h-full flex flex-col justify-center ">
//                 <h2 className="font-semibold text-2xl text-blue-900 flex justify-center ">
//                   Forget Password
//                 </h2>

//                 <div className=" flex items-center justify-center  my-5">
//                   <TextField
//                     label="Email/Phone"
//                     id="outlined-size-small"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     error={!!errors.email}
//                     size="small"
//                   />
//                 </div>

//                 <div className="flex justify-center my-2">
//                   <button
//                     type="submit"
//                     className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px] "
//                   >
//                     Submit
//                   </button>
//                 </div>

//                 <div className=" text-[18px] my-4 gap-1 flex justify-center">
//                   {" "}
//                   {/* <span className="text-black">Note :</span>*  */}
//                   {/* Having trouble logging in get help */}
//                   Having trouble logging in?{" "}
//                   <span className="text-blue-900 underline">
//                      Get help here.
//                   </span>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Password;


import React, { useState } from "react";
import background_image from "../assets/homepharma.png";
import logo from "../assets/logo2.png";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

// import Otp from './Otp';
import { Link } from "react-router-dom";
const Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email_id)) {
      errors.email = "Email is not valid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form submitted successfully");
      // Reset form
      setEmail("");
      setPassword("");
      setErrors({});
    }
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
      <div className="w-full h-full ">
        <Link to="/">
          <img src={logo} style={{ width: "220px" }} />
        </Link>

        <div className=" h-full flex justify-center items-center">
          <div className="bg-white  w-[550px] border rounded-lg  flex flex-col justify-center items-center shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex  justify-center my-8"
            >
              <div className="w-full h-full flex flex-col justify-center ">
                <h2 className="font-semibold text-2xl text-blue-900 flex justify-center ">
                  Forgot Password
                </h2>

                <div className=" flex items-center justify-center  my-5">
                  <TextField
                    label="Email"
                    id="outlined-size-small"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    size="small"
                  />
                </div>

                <div className="flex justify-center my-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-900 border rounded-lg py-3 px-9 cursor-pointer font-semibold text-[18px] "
                  >
                    Submit
                  </button>
                </div>

                <div className=" text-[18px] my-4 gap-1 flex justify-center">
                  {" "}
                  {/* <span className="text-black">Note :</span>*  */}
                  {/* Having trouble logging in get help */}
                  Having trouble?{" "}
                  <Link to="/gethelphere">
                  <span className="text-blue-900 underline">
                     Get help here.
                  </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Password;
