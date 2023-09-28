import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
import {signInWithPopup} from "firebase/auth"
import {auth,googleProvider} from "../lib/firebase"
const FormInput = () => {
  const [show, setShow] = useState(false);
  const toogle = () => setShow(!show);
  
  const handleGoogleSignIn = (ev)=>{

    
    signInWithPopup(auth,googleProvider).then((user)=>{
      alert("Login")
    })
    
  }
  return (
    <>
      <div className="max-w-[550px] bg-slate-800 rounded-md p-3">
        <h1 class="heading text-center py-3">Apply Hour</h1>
        <div className="input-groups">
          <label className="label-input relative">
            <input placeHolder="Username..." type="text" className="inputs" />
            <span className="absolute translate-y-[-50%] top-[50%] text-2xl  left-5">
              {" "}
              <BiSolidUserCircle />
            </span>
          </label>
          <label className="relative">
            <input
              type={show ? "text" : "password"}
              className="inputs"
              placeHolder="password..."
            />
            <span
              onClick={toogle}
              className="absolute translate-y-[-50%] top-[50%] text-2xl  left-5"
            >
              {show ? <BsEyeSlashFill /> : <BsFillEyeFill />}
            </span>
          </label>
          <button className="btn-form">
            Login
          </button>
        </div>
        <div className="my-3">
         <button onClick={handleGoogleSignIn} className="bg-slate-50 py-2 w-[80%] mx-auto flex justify-center items-center px-2 text-center text-3xl rounded-md">
          <FcGoogle/>
         </button>
        </div>
      </div>
    </>
  );
};

export default FormInput;
