/* eslint-disable no-unused-vars */
import React from 'react';
import { Bot } from 'lucide-react';
import { Newspaper } from 'lucide-react';
import { Image } from 'lucide-react';
import { Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
    {
        label: 'Conversation',
        icon: Bot,
        href: '/conversation',
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: 'Text Summarizer',
        icon: Newspaper,
        href: '/text',
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        label: 'Image Generation',
        icon: Image,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        href: '/image',
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        href: '/code',
    },
];


const DashboardComp = () => {
    return (
        <div className='w-full bg-white'>
            <div className="mb-8 space-y-4 mt-8">
                <h2 className="text-2xl md:text-4xl font-bold text-center text-slate-900">
                    Explore the power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center text-slate-900">
                    Chat with the smartest AI - Experience the power of AI
                </p>
            </div>
            <div className='px-4 md:px-20 lg:px-32 grid grid-flow-row gap-7'>
                <Link to="/conversation">
                    <div className="rounded-lg   border bg-card text-card-foreground shadow-sm p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 w-fit rounded-md bg-violet-500/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-violet-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div className="font-semibold text-slate-900">Conversation</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                </Link>

                <Link to="/text-summarizer">
                    <div className="rounded-lg   border bg-card text-card-foreground shadow-sm p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 w-fit rounded-md bg-emerald-500/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-500"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg></div>
                            <div className="font-semibold text-slate-900">Text Summarizer</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>

                </Link>

                <Link to="/code-generation">
                    <div className="rounded-lg   border bg-card text-card-foreground shadow-sm p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 w-fit rounded-md bg-green-700/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-700"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
                            <div className="font-semibold text-slate-900">Code Generation</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>


                </Link>


                <Link to="/image-generation">
                    <div className="rounded-lg   border bg-card text-card-foreground shadow-sm p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer hover:scale-105 hover:bg-neutral-100">
                        <div className="flex items-center gap-x-4">
                            <div className="p-2 w-fit rounded-md bg-pink-700/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-pink-700"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></div>
                            <div className="font-semibold text-slate-900">Image Generation</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default DashboardComp;