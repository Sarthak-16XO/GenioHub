/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Siderbar from "../components/Sidebar";
import { copy, linkIcon } from "../assets";
import { summarizeArticle } from "../api";
import Loader from "./Loader"
import '../styles/App.css';

function Summarizer() {
    const [articleUrl, setArticleUrl] = useState('');
    const [articleSummary, setArticleSummary] = useState('')
    const [copied, setCopied] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setArticleSummary("")
        try {
            const response = await summarizeArticle(articleUrl);
            const articleSummaryy = response;
            setArticleSummary(articleSummaryy);
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
        <div className="w-screen bg-white h-[60rem]">
            <div className="flex">
                <div className="w-[20%]">
                    <Siderbar />
                </div>
                <div className="w-[80%]">
                    <section className='mt-16 w-full flex flex-col items-center justify-center gap-4 '

                    >
                        <div className='main'>
                            <div className='gradient' />
                        </div>
                        <h1 className='text-5xl -mt-8 font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
                            Summarize Articles with <br className='max-md:hidden' />
                            <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>OpenAI GPT-4</span>
                        </h1>
                        <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
                            Simplify your reading with Summarize, an open-source article summarizer
                            that transforms lengthy articles into clear and concise summaries
                        </h2>
                        <div className='flex flex-col w-full gap-2'>
                            <form
                                className='relative w-[80%] pl-[10%] mt-10 ml-14 flex  items-center'
                                onSubmit={handleSubmit}
                            >
                                <img
                                    src={linkIcon}
                                    alt='link-icon'
                                    className='absolute left-0 my-2 ml-[8rem] w-5'
                                />
                                <input
                                    type='url'
                                    placeholder='Paste the article link'
                                    value={articleUrl}
                                    onChange={(e) => setArticleUrl(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    required
                                    className='block w-full rounded-md border border-gray-200 bg-white py-4 p-4  pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer'
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
                        <div className='my-5 ml-48  w-[85%] flex justify-center '>
                            {loading && (
                                <div className="flex items-center align-middle mt-4">
                                    <Loader />
                                </div>
                            )}
                            {articleSummary && (
                                <div className="flex  flex-col items-center bg-white rounded-md shadow-lg shadow-indigo-500 drop-shadow-md ">
                                    <h2 className="ml-10 mt-5 text-purple-600 text-lg font-semibold">Article Summary</h2>
                                    <div className="flex flex-row gap-5 text-slate-900 font-medium p-4 m-4">
                                        <p className="text-justify">{articleSummary}</p>
                                        <img src={copy} onClick={handleCopy} className="text-white cursor-pointer h-6 w-6 z-20" />
                                    </div>
                                </div>
                            )
                            }
                            <div className="p-24 "></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Summarizer;
