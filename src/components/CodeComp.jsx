/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Siderbar from "../components/Sidebar";
import { copy } from "../assets";
import { codeGenerator } from "../api";
import Loader from "./Loader"
import '../styles/App.css';

function CodeComp() {
  const [codePrompt, setcodePrompt] = useState('');
  const [codeResult, setcodeResult] = useState('')
  const [copied, setCopied] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setcodeResult('')
    try {
      const response = await codeGenerator(codePrompt);
      const codeResulty = response;
      setcodeResult(codeResulty);
    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching user plan details", error);
    }
    setLoading(false);

  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className="w-screen bg-white h-fit">
      <div className="flex">
        <div className="hidden lg:block lg:w-[20%]">
          <Siderbar />
        </div>
        <div className="w-full lg:w-[80%]">
          <section className='mt-16 w-full flex flex-col items-center justify-center gap-4'>
            <div className='main hidden lg:block'>
              <div className='gradient' />
            </div>
            <h1 className='text-5xl -mt-8 font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
              Generate Code and Fix Errors with  <br className='max-md:hidden' />
              <span className='mt-4 bg-gradient-to-r from-blue-500 via-emerald-600 to-lime-500 bg-clip-text text-transparent'>OpenAI Codex</span>
            </h1>
            <h2 className='mt-5 text-lg px-5 text-gray-600 sm:text-xl text-center max-w-2xl'>
              Streamline your coding process with Code Wizard, an open-source tool
              that helps you generate code and fix common errors.
            </h2>
            <div className='flex flex-col w-full gap-2'>
              <form
                className='relative w-[90%] lg:w-[80%]  mt-10 mx-auto flex  items-center'
                onSubmit={handleSubmit}
              >
                <input
                  type='text'
                  placeholder='Type your query'
                  value={codePrompt}
                  onChange={(e) => setcodePrompt(e.target.value)}
                  required
                  className='block w-full rounded-md border border-gray-200 bg-white py-4 p-4 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer'
                />
                <button
                  type='submit'
                  className='hover:border-white cursor-pointer hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-24 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-white bg-purple-500'
                >
                  <p>Submit</p>
                </button>
              </form>
            </div>

            {/* Display Result */}
            <div className='my-5  w-[75%] flex justify-center items-center'>
              {loading && (
                <div className="flex items-center align-middle mt-4"
                >
                  <Loader />
                </div>
              )}
              {codeResult && (
                <>
                  <div className="flex flex-row gap-5 text-slate-900 bg-white rounded-md shadow-lg shadow-indigo-500 drop-shadow-md font-medium p-8 m-5">
                    <pre className="whitespace-pre-wrap">{codeResult}</pre>
                    <img src={copy} onClick={handleCopy} className="text-white cursor-pointer h-6 w-6 z-20" />
                  </div>
                </>
              )
              }
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CodeComp;
