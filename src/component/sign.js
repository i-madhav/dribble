import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import sign from "../assests/s3.png"
import { Link } from 'react-router-dom';
import Loader from '../loader/loader';

const SignUpImage = () => {
    return (
        <>
            <div className='md:h-screen md:w-[40vw] bg-blue-400 p-3 flex justify-center  flex-col'>
                <div className='pl-[5rem] font-bold text-white text-[30px] md:w-full'>
                    <p className="w-full">Discover the world's top</p>
                    <p className="w-full">Designers and Creative</p>
                </div>
                <div className='md:w-full'>
                    <img className=" md:w-[90%]" src={sign} ></img>
                </div>
            </div>
        </>
    )
}

const SignUpInput = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async () => {
        const payload = {
            name: name,
            userName: userName,
            email: email,
            password: password

        }

        console.log(payload);

        try {
            const response = await fetch(`https://dribbleback-2.onrender.com/api/v1/users/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(payload)
            });

            if(response.ok){
                window.location.href = "/profile"
                console.log("Signed up successfully");
            }else{
                console.log("wait");
            }
        } catch (error) {
            console.log("Failed to signup", error.message);
        }

        setName("")
        setUserName("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="md:h-screen md:w-[60vw] bg-white flex flex-col justify-center text-left p-10">
                <h2 className="p-11 pb-0 font-bold text-[40px]">Sign up to Dribbble</h2>

                <div className="flex items-center p-11 ">
                    <div className="flex flex-col mr-4 w-[50%]">
                        <label className="mb-3">Name</label>
                        <input className=" border-2 border-gray-400 p-3 rounded-2xl focus:border-2 focus:border-blue-400 outline-none w-full bg-gray-200" type="text" name="name" placeholder='Enter your name' value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}></input>
                    </div>


                    <div className="flex flex-col mr-4 w-[50%]">
                        <label className="mb-3">Username</label>
                        <input className=" border-2 border-gray-400 p-3 rounded-2xl focus:border-2 focus:border-blue-400 outline-none w-full bg-gray-200" type="text" name="name" placeholder='Enter your usernname' value={userName} onChange={(e) => {
                            setUserName(e.target.value);
                        }}></input>
                    </div>

                </div>

                <div className="p-10 pt-1">
                    <div className="flex flex-col mr-4 w-[80%]">
                        <label className="mb-3">Email</label>
                        <input className=" border-2 border-gray-400 p-3 rounded-2xl focus:border-2 focus:border-blue-400 outline-none w-full bg-gray-200" type="email" name="name" placeholder='Enter your Email' value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>
                    </div>

                    <div className="flex flex-col mr-4 w-[80%] mt-4">
                        <label className="mb-3">Password</label>
                        <input className=" border-2 border-gray-400 p-3 rounded-2xl focus:border-2 focus:border-blue-400 outline-none w-full bg-gray-200" type="password" name="name" placeholder='Password' value={password} onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                    </div>
                </div>

                <div className="flex items-center p-10 pt-1 w-1/2">
                    <input
                        id="checkbox-1"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 active:ring-blue-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900">
                        Creating an account means you are okay with our <span className="text-blue-600">Terms of Services , Privacy Policy .</span>
                    </label>
                </div>

                <button onClick={handleSubmit} className='p-3 bg-blue-400 rounded w-[30%] ml-12 cursor-pointer hover:text-white hover:font-bold'>
                    Create Account
                </button>
            </div>
        </>
    )
}

const SignLayout = () => {
    return (
        <>
            <div className="flex">
                <SignUpImage />
                <SignUpInput />
            </div>
        </>
    )
}

export default SignLayout;