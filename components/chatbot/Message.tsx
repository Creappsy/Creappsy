import React from 'react';
import type { ChatMessage } from '../../types';

interface MessageProps {
    message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    const isUser = message.sender === 'user';
    const messageClass = isUser
        ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white self-end'
        : 'bg-slate-700 text-slate-200 self-start';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg max-w-sm md:max-w-md text-sm leading-relaxed ${messageClass} animate-fade-in-up`}>
                {message.text}
            </div>
             <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { animation: fade-in-up 0.3s ease-out forwards; }
             `}</style>
        </div>
    );
};

export default Message;
