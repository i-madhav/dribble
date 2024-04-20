import React, { useState } from "react";
import pic from "../assests/ppp.jpg";
const Header = () => {
    return (
        <header className="flex justify-between items-center h-20 bg-blue-300 border-2 border-gray-300">
            <div className="flex items-center space-x-5">
                <p className="px-3 font-bold text-[30px]">Dribble</p>

                <ul className="flex items-center">
                    <li className=" text-white font-bold p-3">Inspiration</li>
                    <li className=" text-white font-bold p-3">Find Work</li>
                    <li className=" text-white font-bold p-3">Learn Design</li>
                    <li className=" text-white font-bold p-3">Go Pro</li>
                    <li className=" text-white font-bold p-3">Hire Designer</li>
                </ul>
            </div>

            <div className="flex items-center space-x-5 justify-center">
                <input type="search" placeholder="Search" className="p-4 pt-2 w-[30%] rounded"></input>
                <div className="w-7 rounded-full overflow-hidden">
                    <img className="w-full" src={pic} alt="pic"></img>
                </div>

                <button className="inline bg-blue-600 text-white font-bold py-2 px-4 rounded">Upload</button>
            </div>
        </header>
    )
}

const Email = () => {
    return (
        <div className=" flex flex-col items-center pt-10">
            <h1 className="font-bold text-[40px] ">Please verify your email...</h1>
            <svg className="mb-[-1rem]" width="200px" height="200px" viewBox="0 0 24 24" fill="none" stroke="blue"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p className=" text-gray-400 my-3">Please Verify your email address. We've sent a confirmation email to:</p>
            <p className="font-bold my-5">account@email</p>
            <p className="text-gray-400">Click the confirmation link in the email to begin using dribble</p>
        </div>
    )
}

const Footer = () => {
    return (
        <>
        <footer className="flex justify-evenly items-start p-10 bg-slate-200 mt-14 border-2 border-gray-300">
            <ul>
                <li className="mb-5">Dribbble</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, libero.</li>
            </ul>

            <ul>
                <li className="mb-2 font-bold">For Designer</li>
                <li className="mb-2">For Designer</li>
                <li className="mb-2">For Designer</li>
                <li className="mb-2">For Designer</li>
                <li className="mb-2">For Designer</li>
                <li className="mb-2">For Designer</li>
            </ul>

            <ul>
                <li className = "mb-2 font-bold" >Hire Designer</li>
                <li className = "mb-2" >Hire Designer</li>
                <li className = "mb-2" >Hire Designer</li>
                <li className = "mb-2" >Hire Designer</li>
                <li className = "mb-2" >Hire Designer</li>
                <li className = "mb-2" >Hire Designer</li>
            </ul>

            <ul>
                <li className = "mb-2 font-bold" >Company</li>
                <li className = "mb-2" >Company</li>
                <li className = "mb-2" >Company</li>
                <li className = "mb-2" >Company</li>
                <li className = "mb-2" >Company</li>
                <li className = "mb-2" >Company</li>
            </ul>

            <ul>
                <li className = "mb-2 font-bold" >Directories</li>
                <li className = "mb-2" >Directories</li>
                <li className = "mb-2" >Directories</li>
                <li className = "mb-2" >Directories</li>
                <li className = "mb-2" >Directories</li>
                <li className = "mb-2" >Directories</li>
            </ul>

            <ul>
                <li className = "mb-2 font-bold" >Design Resorces</li>
                <li className = "mb-2" >Design Resorces</li>
                <li className = "mb-2" >Design Resorces</li>
                <li className = "mb-2" >Design Resorces</li>
                <li className = "mb-2" >Design Resorces</li>
                <li className = "mb-2" >Design Resorces</li>
            </ul>
        </footer>


        <div className="flex justify-between items-center bg-slate-200 h-20 p-5">
            <p>2024 Dribbble. All right reserved</p>
            <p><strong>20,50,1853</strong> shots dribbled</p>
        </div>
        </>
    )
}

export const EmailLayout = () => {
    return (
        <div className=" h-auto m-0 p-0">
            <Header />
            <Email />
            <Footer />
        </div>
    )
}