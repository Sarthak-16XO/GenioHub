/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Bot } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Image } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom'; // Add this line

function Siderbar() {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="w-full  sticky top-0 transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-[70rem] px-3 py-4 overflow-y-auto bg-[#eef3f7] dark:bg-gray-900 rounded-tr-lg">
        <ul className="space-y-4 mt-4">
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/dashboard"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 text-sky-500"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Dashboard
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/conversation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 text-violet-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Conversation
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/text-summarizer"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 text-emerald-500"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                 Text Summarizer
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/code-generation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 text-green-700"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                 Code Generation
              </span>
            </Link>
          </li>
          <li className="p-2 dark:hover:bg-gray-700 rounded-md">
            <Link
              to="/image-generation"
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg  group hover:bg-white dark:text-white dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-3 text-pink-700"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                 Image Generation
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Siderbar;