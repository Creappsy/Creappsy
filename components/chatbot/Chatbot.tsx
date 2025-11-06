import React, { useState, useEffect, useCallback } from 'react';
import type { ChatMessage } from '../../types';
import { startChatSession } from '../../services/geminiService';
import ChatbotIcon from './ChatbotIcon';
import ChatWindow from './ChatWindow';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { text: '¡Hola! Soy CreappsyBot. ¿En qué puedo ayudarte hoy?', sender: 'ai' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [chatSession, setChatSession] = useState<{ sendMessage: (message: string) => Promise<string> } | null>(null);

    useEffect(() => {
        // Initialize chat session on component mount
        setChatSession(startChatSession());
    }, []);

    const handleSendMessage = useCallback(async (userInput: string) => {
        if (!userInput.trim() || !chatSession) return;

        const newUserMessage: ChatMessage = { text: userInput, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setIsLoading(true);

        try {
            const response = await chatSession.sendMessage(userInput);
            const aiResponse: ChatMessage = { text: response, sender: 'ai' };
            setMessages(prev => [...prev, aiResponse]);
        } catch (error) {
            console.error("Chatbot error:", error);
            const errorMessage: ChatMessage = { text: "Lo siento, tuve un problema para conectarme. Por favor, intenta de nuevo.", sender: 'ai' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [chatSession]);

    const handleOpen = useCallback(() => setIsOpen(true), []);
    const handleClose = useCallback(() => setIsOpen(false), []);

    return (
        <div className="fixed bottom-6 right-6 z-[60]">
            <div className={`transition-opacity duration-300 ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                <ChatbotIcon onClick={handleOpen} />
            </div>
            {isOpen && (
                <ChatWindow
                    messages={messages}
                    onSendMessage={handleSendMessage}
                    onClose={handleClose}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
};

export default Chatbot;