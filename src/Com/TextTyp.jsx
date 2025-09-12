import React from "react";
import TextType from "./TextType";
import { useNavigate } from "react-router-dom";

const TextTyp = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-6">
            <TextType
                text={[
                    "Welcome to FurEver Care ",
                    "Your Pet's Health, Our Priority ",
                    "Let's Get Started",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-4xl md:text-6xl font-extrabold text-center text-green-400 leading-tight drop-shadow-lg"
            />

            <p className="mt-6 text-lg md:text-xl text-green-200 text-center max-w-xl">
                Trusted by pet owners everywhere. Join us in giving your pets the best
                care and love they deserve.
            </p>
            
            <button 
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 mt-12 text-white font-semibold text-lg md:text-xl py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                onClick={() => { navigate('/home') }}
            >
                Let's Get Started
            </button>
        </section>
    );
};

export default TextTyp;