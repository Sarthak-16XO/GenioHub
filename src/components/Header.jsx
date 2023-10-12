import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function SignUpButton() {
  const clerk = useClerk();
  return (
    <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
      Sign up
    </button>
  );
}

function SignInButton() {
  const clerk = useClerk();

  return (
    <button className="sign-in-btn" onClick={() => clerk.openSignIn({})}>
      Sign in
    </button>
  );
}

function Header() {
  return (

    <nav className="bg-slate-900 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to='/' className="flex items-center">
          <img src={logo} className="h-10 mr-3 rounded-md" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">GenioHub</span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <nav className="">
            <SignedOut>
              <ul className="flex flex-row gap-10">
                <li className="bg-purple-500 px-4 py-2 rounded-md text-white">
                  <SignUpButton />
                </li>

                <li className="bg-purple-500 px-4 py-2 rounded-md text-white">
                  <SignInButton />
                </li>
              </ul>
            </SignedOut>

            <SignedIn>
              <div className="flex flex-row items-center gap-8">
                <Link to="/dashboard" className="bg-gradient-to-r from-blue-500 via-purple-600 to-orange-400 rounded-2xl py-2 px-3 text-white blur-0" >Get Started</Link>
                <UserButton afterSignOutUrl="/" />

              </div>

            </SignedIn>
          </nav>
        </div>
      </div>
    </nav>

  );
}

export default Header;
