import React, { useState } from 'react';
import { PageProps } from '../types';
import { CameraIcon, VolumeUpIcon, SilentModeOffIcon } from './Icons';

const WelcomePage: React.FC<PageProps> = ({ navigate }) => {
    const [isReady, setIsReady] = useState(false);

    const handleReady = () => {
        // Prime the audio for iOS by playing a silent sound on user interaction.
        // We don't await this, as it's just to wake up the audio context.
        const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAA');
        audio.play().catch(err => {
            console.warn("Could not prime audio. Playback might require direct user interaction on this device.", err);
        });

        // Request camera permissions early without waiting for the user's response.
        // The browser will show the prompt, and the user can interact with it
        // while the app continues to the next screen.
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                // We got permission, so we can stop the track immediately as we don't need it yet.
                stream.getTracks().forEach(track => track.stop());
            })
            .catch(err => {
                // User likely denied permission. It will be requested again when the scanner is opened.
                console.warn("Camera permission was denied initially or an error occurred.", err);
            });

        // Immediately move to the next screen.
        setIsReady(true);
    };

    if (!isReady) {
        return (
            <div className="text-center space-y-8 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-red-700/50">
                <h1 className="font-['Creepster'] text-6xl font-bold text-red-400 drop-shadow-lg">Get Ready!</h1>
                <div className="space-y-6 text-lg text-gray-200 font-sans">
                    <div className="flex items-center justify-center gap-4 p-4 bg-purple-900/40 rounded-lg">
                        <VolumeUpIcon size={40} className="text-yellow-400"/>
                        <span>For the best experience, please turn your volume up!</span>
                    </div>
                     <div className="flex items-center justify-center gap-4 p-4 bg-purple-900/40 rounded-lg">
                        <SilentModeOffIcon size={40} className="text-yellow-400"/>
                        <span>Turn off silent/vibrate mode for the scares!</span>
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
            <h1 className="font-['Creepster'] text-6xl font-bold text-red-400 drop-shadow-lg">Pumpkin Quest on Wheels!</h1>
            <div className="text-lg text-gray-200 space-y-3 font-sans">
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