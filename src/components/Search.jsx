/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
// import Loader from './Loader';
import { generateModelResponse } from "../api/index";
import { RxReset } from "react-icons/rx"
import Loader from "./Loader"
import robo from "../assets/chatbot.jpg";
import { BiSolidSend } from "react-icons/bi";
import user from "../assets/user.png";


function Sender({ text }) {
    const [displayText, setDisplayText] = useState('');
    const typingDelay = 30;

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex < text.length) {
                currentText += text[currentIndex];
                setDisplayText(currentText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingDelay);

        return () => clearInterval(typingInterval);
    }, [text]);

    const commonStyles = {
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        maxWidth: '40rem',
        fontSize: '1rem',
        width: '25rem',
    };

    return (
        <div
            className="flex space-x-3"
            style={{
                display: 'flex',
                width: '100%',
                columnGap: '0.05rem',
            }}
        >

            <img src={robo} className="h-[3.5rem] w-[3.5rem] rounded-md" />
            <div className="shadow-lg">
                <div style={commonStyles}>
                    <p className="text-slate-900 text-lg">{displayText}</p>
                </div>
            </div>
        </div>
    );
}

function Reciever({ text, color }) {
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                marginTop: "5px",
                columnGap: "0.75rem",
                maxWidth: "20rem",
                marginLeft: "auto",
                justifyContent: "flex-end",
                marginBottom: "1rem"
            }}
        >
            <div>
                <div
                    style={{
                        backgroundColor: color,
                        color: "black",
                        padding: "0.75rem",
                        borderRadius: "0.5rem 0 0.5rem 0.5rem",
                        marginTop: "0.5em",
                        marginBottom: "0.5em"
                    }}
                >
                    <p className="">{text}</p>
                </div>
            </div>

            <img src={user} className="h-16 w-16 mr-3 rounded-md" alt="Flowbite Logo" />

        </div>
    );
}

function Chat({ setPrompt, prompt, chats, loading, color, onClickSend }) {
    
    const commonStyles = {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: '40rem',
        backgroundColor: "transparent",
        borderRadius: "0.5rem",
        overflow: "hidden",
        marginTop: "1rem",
        width: "100%",
        maxWidth: "70rem",
    };


    return (
        <div style={commonStyles}>
            <div
                className=""
                id="style-4"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    height: "35rem",
                    maxHeight: "40rem",
                    overflow: "auto"
                }}
            >
                <Sender className="text-slate-800" text={"Hi there! I'm your virtual assistant. How can I assist you today?"} color={color} />

                {chats.map((chat, index) => (
                    <div key={index}>
                        <Reciever text={chat.message} color={color} /> {/* Pass chat.message as text */}
                        <Sender text={chat.response} color={color} />
                    </div>
                ))}
                {loading && (
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                        }}
                    >
                        <Loader />
                    </div>
                )}
            </div>
            <div
                style={{
                    marginTop: "4.5rem",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.5rem",
                    width: "100%",
                }}
            >
                <div className="relative m-10">
                    <div className="flex w-full items-center">
                        <div className="overflow-hidden flex flex-col w-full flex-grow relative border border-black/10 gizmo:border-black/20  rounded-xl gizmo:rounded-2xl shadow-xs  bg-white gizmo:dark:bg-gray-800 gizmo:shadow-[0_0_0_2px_rgba(255,255,255,0.95)] gizmo:dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)]">
                            <input placeholder="Send a message" className="m-0 w-full resize-none text-slate-800 border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0  md:py-4 md:pr-12 gizmo:md:py-3.5  pl-3 md:pl-4"
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                style={{ maxHeight: '200px', height: '56px', overflowY: 'hidden' }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        onClickSend();
                                    }
                                }}
                            />
                            <div className="flex gap-10">
                                <button className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3  right-2 gizmo:dark:disabled:bg-white  enabled:bg-brand-blue gizmo:enabled:bg-black text-white bottom-3  lg:bottom-1.5 transition-colors "
                                    type="button"
                                    onClick={onClickSend}
                                >
                                    <BiSolidSend className="text-blue-700" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function Preview() {
    const [prompt, setPrompt] = useState("");
    const color = "white";
    const [res, setRes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState([]);

    const resetChat = () => {
        setChats([]);
    };

    const getData2 = async () => {
        if (prompt !== "" && res) {
            const temp = chats;
            temp.push({ message: prompt, response: res });
            setChats(temp);
            setRes(null);
            setPrompt("");
            setLoading(false);
        }
    };

    useEffect(() => {
        getData2();
    }, [res]);

    const handleClick = async () => {
        if (prompt !== "") {
            setLoading(true);
            const ress = await generateModelResponse(prompt);
            setRes(ress);
        }
    };

    const commonStyles = {
        padding: "0.25rem",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        height: "35rem",
    };

    const desktopMenuStyles = {
        width: "64rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        zIndex: "9999"
    }
    return (
        <div style={commonStyles} className="w-full h-[70rem] flex items-center p-10 ">
            <div style={desktopMenuStyles}>
                <button
                    className=" shadow-xl"
                    style={{
                        color: "white",
                        borderRadius: "1rem",
                        width: "7rem",
                        marginTop: '2.25rem',
                        height: "2.5rem",
                        backgroundColor: "rgba(1,1,1,0.1)",
                    }}
                    onClick={resetChat}
                >
                    <div style={{ display: 'flex', gap: "4px", alignItems: 'center', color: 'black' }}>
                        <RxReset className="ml-1" />
                        <p className="ml-1 text-slate-900">Reset Chat</p>
                    </div>
                </button>
            </div>
            <Chat
                prompt={prompt}
                setPrompt={setPrompt}
                setChats={setChats}
                chats={chats}
                loading={loading}
                setIsLoading={setLoading}
                color={color}
                onClickSend={handleClick}
            />
        </div>
    );
}


export default Preview;