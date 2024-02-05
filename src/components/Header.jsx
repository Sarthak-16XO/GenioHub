/* eslint-disable no-unused-vars */
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function SignInButton() {
  const clerk = useClerk();
  return (
    <button className="sign-in-btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}

function Header() {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-bborder-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/' className="flex items-center">
          <img src={logo} className="h-10 mr-3 rounded-md" alt="Logo" />
          <p className="self-center text-2xl font-semibold text-white whitespace-nowrap">GenioHub</p>
        </Link>
        <div className="flex md:order-2 gap-2 lg:gap-7 items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <Link to="/dashboard" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>
      </div>
    </nav>
  );
}

export default Header;