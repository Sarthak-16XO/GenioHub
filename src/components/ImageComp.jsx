/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Siderbar from "../components/Sidebar";
import { linkIcon } from "../assets";
import { imageGeneration } from "../api";
import Loader from "./Loader"
import '../styles/App.css';

function ImageComp() {
  const [imagePrompt, setImagePrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setImageUrl("")
    try {
      const response = await imageGeneration(imagePrompt);
      const articleSummaryy = response;

      // Delay the setting of imageUrl by 3 seconds
      setTimeout(() => {
        setImageUrl(articleSummaryy);
        setLoading(false);
      }, 6000);


    } catch (error) {
      // Handle errors if necessary
      console.error("Error fetching user plan details", error);
    }
  };


  return (
    <div className="w-screen  bg-white h-fit">
      <div className="flex h-[150%]">
        <div className="hidden lg:block lg:w-[20%]">
          <Siderbar />
        </div>
        <div className="w-full lg:w-[80%]">
          <section className='mt-16 w-full flex flex-col items-center justify-center gap-4 '>
            <div className='main hidden lg:block'>
              <div className='gradient' />
            </div>
            <div>
              <h1 className='text-5xl -mt-8 font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
                <span className='bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500 t bg-clip-text text-transparent'>Free AI Image Generator</span>
              </h1>
              <h2 className='mt-5 text-lg p-4 text-gray-600 sm:text-xl text-center max-w-2xl'>
                Convert words to images with  free AI image generator. Watch your imagination transform into AI-generated images online.
              </h2>
            </div>
            <div className="mt-10 p-1 w-[80%] rounded-md bg-gradient-to-r from-blue-400 via-green-400 to-lime-400">
              <form
                className='relative w-full flex  items-center'
                onSubmit={handleSubmit}
              >
                <img
                  src={linkIcon}
                  alt='link-icon'
                  className='absolute left-0 my-2 ml-2 w-5'
                />
                <input
                  type='text'
                  placeholder='Enter your prompt'
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                  required
                  className='block w-full rounded-md border border-gray-200 bg-white py-4 p-4  pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer'
                />
                <button
                  type='submit'
                  className='cursor-pointer hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-24 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium bg-teal-600 hover:bg-teal-500'
                >
                  <p className="text-white">Submit</p>
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
              {imageUrl && (
                <>
                  <div className="flex   flex-row gap-5 text-slate-900 bg-white rounded-md shadow-lg shadow-indigo-500 drop-shadow-md font-medium p-2 m-5 ">
                    <img src={imageUrl} className="h-[26rem] w-[26rem] rounded-md" />
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

export default ImageComp;