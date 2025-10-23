import React from 'react';
import { ImportantIcon, PlayIcon } from './Icons';
import { PageProps } from '../types';

const RulesPage: React.FC<PageProps> = ({ navigate }) => {
    return (
        <div className="space-y-8 p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-lg border border-purple-500/50">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold text-yellow-400 flex items-center gap-3">
                    <PlayIcon /> How to Play
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
                    <li>There are 11 hidden QR codes throughout Skate & Play.</li>
                    <li>Each QR shows one question.</li>
                    <li>Type your one-word answer and press Submit.</li>
                    <li>When correct, you'll receive a hint and your camera will open to scan the next QR.</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h2 className="text-4xl font-bold text-red-400 flex items-center gap-3">
                   <ImportantIcon /> Important
                </h2>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-200">
                    <li>Scanning a wrong QR or skipping ahead will show a “Trick” message and restart your hunt at Reception.</li>
                    <li>Some QR codes are fake and will scare you before sending you back to the start.</li>
                    <li>Only official Pumpkin-framed QR codes are valid.</li>
                </ul>
            </div>
            <button
                onClick={() => navigate('1')}
                className="w-full text-center block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-md">
                Start the Hunt
            </button>
        </div>
    );
};

export default RulesPage;