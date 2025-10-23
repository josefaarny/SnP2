import React, { useState, useEffect, useRef } from 'react';
import { GAME_DATA } from '../constants/gameData';
import { PageProps, StepData } from '../types';

// Let TypeScript know about the QRCode library from the CDN
declare const QRCode: any;

interface StepWithUrl extends Partial<StepData> {
    id: number;
    location: string;
    url: string;
}

const AdminPage: React.FC<PageProps> = ({ navigate }) => {
    const [baseUrl, setBaseUrl] = useState('');
    const [selectedStep, setSelectedStep] = useState<StepWithUrl | null>(null);
    const qrcodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Construct the base URL from the current window location, ensuring no params are included.
        setBaseUrl(window.location.origin + window.location.pathname);
    }, []);

    // Effect to generate QR code when a step is selected
    useEffect(() => {
        if (selectedStep && qrcodeRef.current) {
            // Clear previous QR code
            qrcodeRef.current.innerHTML = '';
            // Generate new one
            new QRCode(qrcodeRef.current, {
                text: selectedStep.url,
                width: 256,
                height: 256,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H,
            });
        }
    }, [selectedStep]);

    const handleSelectStep = (step: StepData) => {
        setSelectedStep({ ...step, url: `${baseUrl}?step=${step.id}` });
    };
    
    const handleSelectTrick = () => {
        setSelectedStep({
            id: -1,
            location: 'Trick QR Code',
            url: `${baseUrl}?step=trick`
        });
    }

    const handleGoBack = () => {
        const url = new URL(window.location.href);
        url.searchParams.delete('admin');
        window.history.pushState({}, '', url.toString());
        navigate('0');
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 p-8 bg-black/50 backdrop-blur-md rounded-2xl shadow-lg border border-purple-500/50">
            <div className="flex justify-between items-center">
                 <h1 className="text-4xl font-bold text-yellow-400">Admin: QR Code Generator</h1>
                 <button onClick={handleGoBack} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Back to Game
                 </button>
            </div>
            <p className="text-gray-300 font-sans">Click a step to generate a QR code with the correct, full URL. Save the image or print this page for your scavenger hunt.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 pr-4 border-r border-gray-700/50 overflow-y-auto max-h-[60vh]">
                    {GAME_DATA.map((step) => (
                        <button key={step.id} onClick={() => handleSelectStep(step)} className={`w-full text-left p-3 rounded-lg transition-colors ${selectedStep?.id === step.id ? 'bg-purple-600' : 'bg-gray-800/50 hover:bg-purple-900/50'}`}>
                            <span className="font-bold text-yellow-400">Step {step.id}:</span> {step.location}
                        </button>
                    ))}
                    <button onClick={handleSelectTrick} className={`w-full text-left p-3 rounded-lg transition-colors ${selectedStep?.id === -1 ? 'bg-red-600' : 'bg-red-900/50 hover:bg-red-800/50'}`}>
                        <span className="font-bold">TRICK QR CODE</span>
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-lg min-h-[350px]">
                    {selectedStep ? (
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl text-yellow-400">{selectedStep.location}</h2>
                            <div ref={qrcodeRef} className="p-4 bg-white rounded-lg inline-block shadow-lg"></div>
                            <p className="text-gray-400 font-mono break-all text-sm">{selectedStep.url}</p>
                        </div>
                    ) : (
                        <div className="text-center text-gray-400">
                            <p className="text-2xl">Select a step from the left to generate its QR code.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
