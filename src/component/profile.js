import React, { useState, useRef } from 'react';
import axios from 'axios';


const ProfileText = () => {
    return (
        <>
            <h1 className="text-[40px] font-bold p-20 pt-10 pb-5 w-[90%]">Welcome! Let's create your profile</h1>
            <p className=" text-gray-400 pl-20 w-[90%] mb-10">Let other's get to know you better! You can do these later</p>
        </>
    )
}

const ImageUpload = () => {
    const [isUploaded, setIsUploaded] = useState(false);
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [location, setLocation] = useState("");
    const fileInputRef = useRef(null);

    console.log(file);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setIsUploaded(true);
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));
            // Save the file to local storage
            localStorage.setItem('uploadedFile', JSON.stringify(selectedFile));
        } else {
            setIsUploaded(false);
            setFile(null);
            setImagePreview(null);
            // Remove the file from local storage
            localStorage.removeItem('uploadedFile');
        }
    };


    const handleDrop = (event) => {
        event.preventDefault();
        event.currentTarget.classList.remove('border-solid');
        const selectedFile = event.dataTransfer.files[0];
        if (selectedFile) {
            setIsUploaded(true);
            setFile(selectedFile);
            // Save the file to local storage
            localStorage.setItem('uploadedFile', JSON.stringify(selectedFile));
        } else {
            setIsUploaded(false);
            setFile(null);
            // Remove the file from local storage
            localStorage.removeItem('uploadedFile');
        }
    };

    const handleClick = (event) => {
        fileInputRef.current.click();
    };

    const handleMouseEnter = (event) => {
        if (isUploaded) {
            event.currentTarget.textContent = '⭯';
        }
    };

    const handleMouseLeave = (event) => {
        if (isUploaded) {
            event.currentTarget.textContent = '✓';
        } else {
            event.currentTarget.textContent = '+';
        }
    };

    const handleUpload = async () => {
        console.log("I am here");
        if (file && location) {
            try {
                const formData = new FormData();
                formData.append('imageUrl', file); // Change 'file' to 'imageUrl'
                formData.append('location', location);
                const response = await fetch('http://localhost:8000/api/v1/users/profile', {
                    method: 'POST',
                    body: formData
                });
    
                if (response.ok) {
                    window.location.href = "/options"
                    console.log('File uploaded successfully');
                    // Clear the form after successful upload
                    setFile(null);
                    setImagePreview(null);
                    setLocation("");
                } else {
                    console.error('Failed to upload file');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            console.error('Please select both image and location');
        }
    };
    

    return (
        <div className="flex flex-col items-start mt-0 mx-auto w-[80%]">
            <p className="mb-4">
                <label className="font-bold pl-8">Add a avatar</label>
            </p>
            <div className="file-upload rounded-full border-2 border-blue-400 border-dotted p-10 pb-4">
                {imagePreview && (
                    <div className="w-full h-40 flex justify-center items-center overflow-hidden bg-red-300">
                        <img src={imagePreview} className="max-w-full max-h-full object-contain" />
                    </div>
                )}
                <div
                    className={`drop-zone w-20 h-20 relative bottom-5 mx-auto flex items-center justify-center text-6xl font-bold rounded-lg border-3 ${isUploaded ? 'border-solid' : 'border-dashed'} transition-all duration-400 cursor-pointer`}
                    onClick={handleClick}
                    onDrop={handleDrop}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ display: imagePreview ? 'none' : 'flex' }}
                >
                    {isUploaded ? '' : '+'}
                </div>
            </div>
            <input
                type="file"
                name="File"
                className="file-input mx-auto mt-5 px-4 py-2 text-sm text-center text-gray-500 border-0 shadow-none w-3/5 max-w-xs hover:bg-gray-100 focus:outline-none hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
            />

            <div className="ml-2 mt-14">
                <h2 className="font-bold  text-[20px]">Add Your Location</h2>
                <input
                    type="text"
                    name="File"
                    placeholder='Enter Your Location'
                    className=" focus:border-none border-b-2 border-gray-300 p-5 pb-2 pl-1 w-[40vw] outline-none"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}
                />
            </div>


            <button className={`text-white font-bold p-3 inline rounded px-20 mt-8 ${location ? "bg-blue-600" : "bg-blue-200 cursor-not-allowed"}`} disabled={location.length === 0} onClick={handleUpload}>Next</button>
        </div>
    );
};


export const ProfileLayout = () => {
    return (
        <div className="flex flex-col items-center">
            <ProfileText />
            <ImageUpload />
        </div>
    )
}