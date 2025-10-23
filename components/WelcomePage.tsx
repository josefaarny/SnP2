import React, { useState } from 'react';
import { PageProps } from '../types';
import { CameraIcon, VolumeUpIcon } from './Icons';

const WelcomePage: React.FC<PageProps> = ({ navigate }) => {
    const [isReady, setIsReady] = useState(false);

    const handleReady = async () => {
        // Request camera permissions early.
        // We don't need to handle failure here, as the scanner will re-prompt if needed.
        // The goal is just to get the prompt out of the way.
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            // We got permission, so we can stop the stream immediately.
            stream.getTracks().forEach(track => track.stop());
        } catch (err) {
            console.warn("Camera permission was denied initially. It will be requested again when the scanner is opened.", err);
        }
        setIsReady(true);
    };

    if (!isReady) {
        return (
            <div className="text-center space-y-8 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-red-700/50">
                <h1 className="text-6xl font-bold text-red-400 drop-shadow-lg">Get Ready!</h1>
                <div className="space-y-6 text-lg text-gray-200 font-sans">
                    <div className="flex items-center justify-center gap-4 p-4 bg-purple-900/40 rounded-lg">
                        <VolumeUpIcon size={40} className="text-yellow-400"/>
                        <span>For the best experience, please turn your volume up!</span>
                    </div>
                    <div className="flex items-center justify-center gap-4 p-4 bg-purple-900/40 rounded-lg">
                        <CameraIcon size={40} className="text-yellow-400"/>
                        <span>You'll need to allow camera access to scan QR codes.</span>
                    </div>
                </div>
                <button
                    onClick={handleReady}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md">
                    I'm Ready!
                </button>
            </div>
        );
    }

    return (
        <div className="text-center space-y-6 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-red-700/50">
            <h1 className="text-6xl font-bold text-red-400 drop-shadow-lg">Pumpkin Quest on Wheels!</h1>
            <div className="text-lg text-gray-200 space-y-3">
                <p>Get ready for a fun Halloween scavenger hunt inside Skate & Play.</p>
                <p>Explore the building to find hidden QR codes, solve clues, and unlock your next location.</p>
                <p>Each time you answer correctly, you'll receive a hint and your camera will open to find the next QR code.</p>
            </div>
            <button
                onClick={() => navigate('0.1')}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md">
                View the Rules
            </button>
        </div>
    );
};

export default WelcomePage;