import { useState } from "react";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const toogle = () => setIsShow(!isShow);
  return (
    <nav className="bg-slate-800 text-white flex justify-between w-full items-center fixed top-0 z-50 py-5 px-3 sm:px-4 lg:px-10 ">
      <div className="brand">
        <h1>Navbar</h1>
      </div>

      <ul
        className={`${
          isShow ? "left-0" : "left-[-1000%]"
        } nav-links duration-500 absolute top-[100%] left-0 w-[70%] bg-slate-700 text-2xl h-screen p-4 lg:static lg:w-auto lg:h-auto lg:p-0 lg:flex lg:flex-row lg:justify-center lg:text-1xl lg:gap-10`}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <ul className="flex mt-10 social-media justify-evenly items-center w-full  gap-2 lg:hidden">
            <li>
              <FaGithub />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <BsLinkedin />
            </li>
          </ul>
        </li>
      </ul>
      <button className="text-2xl lg:hidden" onClick={toogle}>
        {isShow ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
