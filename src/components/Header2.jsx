/* eslint-disable no-unused-vars */
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import "../styles/Header.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Transition } from "@headlessui/react";
import { Bot } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Image } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom'; 

function SignUpButton() {
    const clerk = useClerk();
    return (
        <button type="button" className="sign-up-btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => clerk.openSignUp({})}>Sign Up</button>
    );
}

function SignInButton() {
    const clerk = useClerk();
    return (
        <button className="sign-in-btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => clerk.openSignIn({})}>
            Sign in
        </button>
    );
}

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-slate-900 border-gray-200">
            <div className="w-full flex flex-row  items-center justify-between md:mx-auto p-4">
                <Link to='/' className="flex items-center">
                    <img src={logo} className="h-10 mr-3 rounded-md" alt="Logo" />
                    <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">GenioHub</span>
                </Link>

                <div className="" id="navbar-default">
                    <nav className="">
                        <SignedOut>
                            <ul className="flex flex-row gap-10">
                                <SignUpButton />
                                <SignInButton />
                            </ul>
                        </SignedOut>

                        <SignedIn>
                            <div className="flex flex-row items-center gap-4 md:gap-8">
                                <UserButton afterSignOutUrl="/" />
                                <div className=" flex">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        type="button"
                                        className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-slate-50 hover:text-purple-500 focus:outline-none md:hidden focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        aria-controls="mobile-menu"
                                        aria-expanded="false"
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        {!isOpen ? (
                                            <svg
                                                className="block h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="block h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </SignedIn>

                    </nav>
                </div>

                
            </div>
            <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    className="absolute bg-slate-900 w-full"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-3 sm:px-3">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
                                >
                                    <LayoutDashboard className="flex-shrink-0 w-6 h-6 text-purple-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Dashboard
                                    </span>
                                </Link>
                                <Link
                                    to="/conversation"
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
                                >
                                    <Bot className="flex-shrink-0 w-6 h-6 text-purple-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Conversation
                                    </span>
                                </Link>
                                <Link
                                    to="/text-summarizer"
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
                                >
                                    <Newspaper className="flex-shrink-0 w-6 h-6 text-purple-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Text Summarizer
                                    </span>
                                </Link>
                                <Link
                                    to="/code-generation"
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
                                >
                                    <Code className="flex-shrink-0 w-6 h-6 text-purple-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Code Generation
                                    </span>
                                </Link>
                                <Link
                                    to="/image-generation"
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
                                >
                                    <Image className="flex-shrink-0 w-6 h-6 text-purple-600 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Image Generation
                                    </span>
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
        </nav>

    );
}

export default Header;