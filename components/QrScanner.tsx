import React, { useEffect, useRef, useCallback } from 'react';

declare const Html5Qrcode: any;

interface QrScannerProps {
    onClose: () => void;
    onScanSuccess: (decodedText: string) => void;
}

const QrScanner: React.FC<QrScannerProps> = ({ onClose, onScanSuccess }) => {
    const scannerRef = useRef<any>(null);
    const hasScanned = useRef(false);

    const handleScan = useCallback(async (decodedText: string) => {
        if (hasScanned.current) return;
        hasScanned.current = true;

        if (scannerRef.current) {
            try {
                await scannerRef.current.stop();
                onScanSuccess(decodedText);
            } catch (err) {
                console.error("Failed to stop the QR scanner.", err);
                onScanSuccess(decodedText);
            }
        }
    }, [onScanSuccess]);

    useEffect(() => {
        if (window.isSecureContext === false) {
            const message = "Camera access is only available in secure contexts (HTTPS or localhost).";
            console.error(message);
            alert(message + " To fix this, use a local development server or deploy to a secure website.");
            onClose();
            return;
        }

        if (typeof Html5Qrcode === 'undefined') {
            const message = "QR Scanner library (Html5Qrcode) is not loaded.";
            console.error(message);
            alert(message + " Please check your internet connection and refresh.");
            onClose();
            return;
        }

        const qrScanner = new Html5Qrcode("qr-reader-container", { verbose: false });
        scannerRef.current = qrScanner;

        const config = { fps: 10, qrbox: { width: 250, height: 250 } };
        
        qrScanner.start(
            { facingMode: "environment" },
            config,
            handleScan,
            (errorMessage: any) => {}
        ).catch((err: any) => {
            console.error("Unable to start QR scanner.", err);
            alert("Could not start camera. Please check camera permissions and try again.");
            onClose();
        });

        return () => {
            if (scannerRef.current && scannerRef.current.isScanning) {
                scannerRef.current.stop().catch((err: any) => {
                    console.warn("Cleanup stop failed.", err);
                });
            }
        };
    }, [onClose, handleScan]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4">
            <div className="bg-transparent p-6 rounded-2xl w-full max-w-sm relative">
                <div id="qr-reader-container" className="w-full rounded-lg overflow-hidden" style={{ transform: 'scale(1.05)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
                    <div className="w-full max-w-[260px] h-[260px] relative animate-pulse-bright">
                        <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-orange-500 rounded-tl-lg"></div>
                        <div className="absolute -top-1 -right-1 w-10 h-10 border-t-4 border-r-4 border-orange-500 rounded-tr-lg"></div>
                        <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-4 border-l-4 border-orange-500 rounded-bl-lg"></div>
                        <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-orange-500 rounded-br-lg"></div>
                    </div>
                </div>
                 <button 
                    onClick={onClose} 
                    className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg"
                >
                    Close Scanner
                </button>
            </div>
        </div>
    );
};

export default QrScanner;