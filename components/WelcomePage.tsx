import React from 'react';
import { PageProps } from '../types';

const WelcomePage: React.FC<PageProps> = ({ navigate }) => {
    return (
        <div className="text-center space-y-6 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-orange-500/50">
            <h1 className="text-6xl font-bold text-orange-400 drop-shadow-lg">Pumpkin Quest on Wheels!</h1>
            <div className="text-lg text-gray-200 space-y-3">
                <p>Get ready for a fun Halloween scavenger hunt inside Skate & Play.</p>
                <p>Explore the building to find hidden QR codes, solve clues, and unlock your next location.</p>
                <p>Each time you answer correctly, you'll receive a hint and your camera will open to find the next QR code.</p>
            </div>
            <button
                onClick={() => navigate('0.1')}
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md">
                View the Rules
            </button>
        </div>
    );
};

export default WelcomePage;