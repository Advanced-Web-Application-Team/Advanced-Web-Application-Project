import * as React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseconfig";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar({ closeModal, navbarOpen, user, setAuthState, setUser }) {
  let navigate = useNavigate();

  const handleClick = () => {
    closeModal();
  };
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState("login");
      })
      .catch((err) => console.log(err));
  };

  const toHomePage = () => {
    navigate("");
    closeModal();
  };

  const toEmissionPage = () => {
    navigate("/emission");
    closeModal();
  };

  const toLayout = () => {
    navigate("/layoutdesign");
    closeModal();
  };

  return (
    <div
      className={navbarOpen && "nav fixed top-0 left-0 w-full h-full z-10"}
      onClick={() => closeModal()}
    >
      <div
        className={
          navbarOpen
            ? "open active absolute top-0 left-0 w-3/12 xl:w-2/12 md:w-2/12 lg:w-2/12 h-full bg-gray-200"
            : "open absolute top-0 left-0 w-3/12 xl:w-2/12 md:w-2/12 lg:w-2/12 h-full bg-gray-200"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between my-10 px-2">
          <h1 className="text-xl text-black font-bold"> Navbar </h1>
          <FaTimes
            className="inline-block border-2 cursor-pointer"
            size={24}
            color={"purple-400"}
            onClick={handleClick}
          />
        </div>
        <ul className="p-0 border-2">
          <li
            className="py-5 text-center border-b-2 border-b-purple-400 border-t-2 border-t-purple-400 cursor-pointer font-bold"
            onClick={toHomePage}
          >
            {" "}
            <p> Athmospheric co2 and temperatures </p>{" "}
          </li>
          <li
            className="py-5 text-center text-center pt-5 border-b-2 border-b-purple-400 cursor-pointer font-bold"
            onClick={toEmissionPage}
          >
            {" "}
            <p> Emission sources </p>{" "}
          </li>
          <li
            className="py-5 text-center text-center pt-5 border-b-2 border-b-purple-400 cursor-pointer font-bold"
            onClick={toLayout}
          >
            {" "}
            <p> To Layout Design Page </p>{" "}
          </li>
          <li className="py-5 text-center text-center pt-5 border-b-2 border-b-purple-400 cursor-pointer font-bold">
            {" "}
            <p >User{user} </p>{" "} 
          </li>
          <li
            className="py-5 text-center text-center pt-5 border-b-2 border-b-purple-400 cursor-pointer font-bold hover:bg-sky-700"
            onClick={signOutHandler}
          >
            {" "}
            Logout{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
