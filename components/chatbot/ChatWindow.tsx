

import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../../types';
import Message from './Message';

interface ChatWindowProps {
    messages: ChatMessage[];
    onSendMessage: (message: string) => void;
    onClose: () => void;
    isLoading: boolean;
}

const XMarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);
const PaperAirplaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
);


const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSendMessage, onClose, isLoading }) => {
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages, isLoading]);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }, []);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onSendMessage(inputValue);
            setInputValue('');
        }
    }, [inputValue, onSendMessage]);

    return (
        <div className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-sm h-[calc(100vh-7rem)] max-h-[600px] bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col border border-slate-700 transform-gpu transition-all duration-300 ease-in-out origin-bottom-right animate-scale-in">
            <header className="flex items-center justify-between p-4 border-b border-slate-700 flex-shrink-0">
                <div>
                    <h3 className="font-bold text-white">CreappsyBot</h3>
                    <p className="text-xs text-emerald-400 flex items-center">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        En línea
                    </p>
                </div>
                <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-colors" aria-label="Cerrar chat">
                    <XMarkIcon />
                </button>
            </header>

            <div className="flex-grow p-4 overflow-y-auto">
                <div className="space-y-4">
                    {messages.map((msg, index) => (
                        <Message key={index} message={msg} />
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-slate-700 text-white p-3 rounded-lg max-w-xs flex items-center space-x-2">
                                <span className="text-sm">Escribiendo</span>
                                <div className="flex space-x-1">
                                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-150"></span>
                                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-300"></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div ref={messagesEndRef} />
            </div>

            <footer className="p-4 border-t border-slate-700 flex-shrink-0">
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Escribe tu mensaje..."
                        className="flex-grow bg-slate-700 border-slate-600 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                        autoComplete="off"
                    />
                    <button type="submit" disabled={!inputValue.trim()} className="bg-cyan-500 text-white p-2.5 rounded-full hover:bg-cyan-600 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500" aria-label="Enviar mensaje">
                        <PaperAirplaneIcon />
                    </button>
                </form>
            </footer>
             <style>{`
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.5); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards; }
             `}</style>
        </div>
    );
};

export default ChatWindow;