import React, { useEffect, useState } from 'react';
import { PageProps } from '../types';
import { ScaryFaceIcon } from './Icons';

// A base64 encoded scream sound to avoid external file dependencies.
const SCARE_SOUND = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA='; // A short, safe pop/click sound. A real scream would be too large.

const TrickPage: React.FC<PageProps> = ({ navigate }) => {
    const [scareFinished, setScareFinished] = useState(false);

    useEffect(() => {
        // --- The Scare Sequence ---
        // 1. Vibrate the phone
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 200]);
        }
        
        // 2. Play the sound
        try {
            const audio = new Audio(SCARE_SOUND);
            audio.play();
        } catch (error) {
            console.error("Audio playback failed.", error);
        }

        // 3. After the scare is over, show the regular page content
        const timer = setTimeout(() => {
            setScareFinished(true);
        }, 1500); // The scare lasts for 1.5 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleRestart = () => {
        localStorage.removeItem('pumpkinQuestProgress');
        navigate('1');
    };

    if (!scareFinished) {
        return (
            <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden animate-screen-shake">
                <div className="absolute inset-0 bg-red-900 animate-ping opacity-30"></div>
                <ScaryFaceIcon size={300} className="text-white animate-jump-scare" />
            </div>
        );
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-black/60 backdrop-blur-md rounded-2xl border border-red-800/50 shadow-lg shadow-red-500/20">
            <h1 className="text-8xl font-bold text-red-500 drop-shadow-[0_2px_2px_rgba(255,0,0,0.5)]" style={{textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000'}}>Tricked!</h1>
            <p className="mt-4 text-2xl text-white font-sans">That wasn't the right QR code.</p>
            <p className="mt-2 text-xl text-gray-300 font-sans">Your progress has been reset. Return to the Reception to restart your quest.</p>
            <button 
                onClick={handleRestart}
                className="mt-8 bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-xl transition-all transform hover:scale-105 shadow-md shadow-red-900 hover:shadow-red-700"
            >
                Return to Start
            </button>
        </div>
    );
};

export default TrickPage;