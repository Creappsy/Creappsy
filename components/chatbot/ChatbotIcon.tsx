import React from 'react';

interface ChatbotIconProps {
    onClick: () => void;
}

const ChatbotIconSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75c-.75-.75-1.88-1.125-3-1.125s-2.25.375-3 1.125" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
);


const ChatbotIcon: React.FC<ChatbotIconProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 transform hover:scale-110 animate-pulse-slow"
            aria-label="Abrir asistente virtual"
        >
            <ChatbotIconSVG />
             <style>{`
                @keyframes pulse-slow {
                    50% {
                        box-shadow: 0 0 0 12px rgba(0, 220, 255, 0.15), 0 0 0 0 rgba(167, 139, 250, 0.15);
                    }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s infinite cubic-bezier(0.66, 0, 0, 1);
                }
             `}</style>
        </button>
    );
};

export default ChatbotIcon;
