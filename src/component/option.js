import React, { useState } from "react";
import pic from "../assests/s5.png";
import { Link } from "react-router-dom";

export const Options = () => {
        const [showImage, setShowImage] = useState(true);
        const [showImage1, setShowImage1] = useState(true);
        const [showImage2, setShowImage2] = useState(true);

        async function handleEmail (){
                try {
                    const response = await fetch('http://localhost:8000/api/v1/users/email');
                    if (response.ok) {
                        console.log('Email sent successfully');
                    } else {
                        console.error('Failed to send email');
                    }
                } catch (error) {
                    console.error('Error sending email:', error.message);
                }
            };

    return (
        <>
        <div className="text-center p-20 pt-10">
            <div>
                <h2 className="font-bold text-[35px]">What brings you to dribbble?</h2>
                <p className="text-gray-300">Select the options that best describe you. Don't worry, you can explore other options later</p>
            </div>

            <ul className="flex justify-evenly mt-16">
                <li className="h-[22rem] w-[20rem] border-2 border-gray-300 flex justify-center items-center flex-col p-15 rounded-lg">
                    {showImage ? 
                        <>
                            <img src={pic} className="w-[12rem] text-center mb-4" />
                            <p className="font-bold mb-4 text-[20px]">I'm a designer looking to share my work</p>
                            <div className="rounded-full p-2 border-2 border-black" onClick={() => setShowImage(!showImage)}></div>
                        </>
                     : 
                        <>
                            <img src={pic} className="w-[12rem] text-center mb-4 mt-[-12rem]" />
                            <p className="font-bold mb-3 text-[20px]">I'm a designer looking to share my work</p>
                            <p className="text-gray-400 text-[15px] mb-3">With over 7 million shots from a vibrant community of designers, Dribbble is the leading source for design inspiration.</p>
                            <div className="mb-[-8rem]">
                                <svg onClick={() => setShowImage(!showImage)} fill="blue" className="w-[2rem]" height="64px" width="64px" version="1.1" id="Capa_1" viewBox="0 0 191.667 191.667" xmlSpace="preserve" stroke="blue">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685 c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971 l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969 C156.146,65.765,156.146,74.362,150.862,79.646z"></path>
                                    </g>
                                </svg>
                            </div>
                        </>
                    }
                </li>

                <li className="h-[22rem] w-[20rem] border-2 border-gray-300 flex justify-center items-center flex-col p-15 rounded-lg">
                    {showImage1 ? 
                        <>
                            <img src={pic} className="w-[12rem] text-center mb-4" />
                            <p className="font-bold mb-4 text-[20px]">I'm a designer looking to share my work</p>
                            <div className="rounded-full p-2 border-2 border-black" onClick={() => setShowImage1(!showImage1)}></div>
                        </>
                     : 
                        <>
                            <img src={pic} className="w-[12rem] text-center mb-4 mt-[-12rem]" />
                            <p className="font-bold mb-3 text-[25px]">I'm a designer looking to share my work</p>
                            <p className="text-gray-400 text-[15px] mb-3">With over 7 million shots from a vibrant community of designers, Dribbble is the leading source for design inspiration.</p>
                            <div className="mb-[-8rem]">
                                <svg onClick={() => setShowImage1(!showImage1)} fill="blue" className="w-[2rem]" height="64px" width="64px" version="1.1" id="Capa_1" viewBox="0 0 191.667 191.667" xmlSpace="preserve" stroke="blue">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685 c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971 l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969 C156.146,65.765,156.146,74.362,150.862,79.646z"></path>
                                    </g>
                                </svg>
                            </div>
                        </>
                    }
                </li>

                <li className="h-[22rem] w-[20rem] border-2 border-gray-300 flex justify-center items-center flex-col p-15 rounded-lg">
                    {showImage2 ? 
                        <>
                            <img src={pic} className="w-[12rem] text-center mb-4" />
                            <p className="font-bold mb-4 text-[20px]">I'm a designer looking to share my work</p>
                            <div className="rounded-full p-2 border-2 border-black" onClick={() => setShowImage2(!showImage2)}></div>
                        </>
                     : 
                        <>
                            <img src={pic} className="w-[12rem] text-center mb-4 mt-[-12rem]" />
                            <p className="font-bold mb-3 text-[20px]">I'm a designer looking to share my work</p>
                            <p className="text-gray-400 text-[15px] mb-3">With over 7 million shots from a vibrant community of designers, Dribbble is the leading source for design inspiration.</p>
                            <div className="mb-[-8rem]">
                                <svg onClick={() => setShowImage2(!showImage2)} fill="blue" className="w-[2rem]" height="64px" width="64px" version="1.1" id="Capa_1" viewBox="0 0 191.667 191.667" xmlSpace="preserve" stroke="blue">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685 c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971 l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969 C156.146,65.765,156.146,74.362,150.862,79.646z"></path>
                                    </g>
                                </svg>
                            </div>
                        </>
                    }
                </li>
            </ul>
        </div>

        <div className="flex justify-center mt-[-2rem]">
            <p className=" font-bold text-[14px]">AnyThing else? You can select multiple</p>
        </div>

        <div className="flex justify-center mt-4">
            <Link to="/email" className=" bg-blue-400 text-white font-bold py-3 px-12 rounded" onClick={handleEmail}>Finish</Link >
        </div>

        <div className="flex justify-center mt-3">
            <p className=" text-gray-400 font-bold">or Press RETURN</p>
        </div>
        </>
    );
};
