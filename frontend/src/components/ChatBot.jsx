// components/ChatbotButton.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

export default function ChatbotButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition z-50 flex items-center gap-2"
                aria-label="Toggle chatbot"
            >
                {open ? <X size={20} /> : null}
                Help & Support
            </button>

            {/* Chat Widget */}
            {open && (
                <div className="fixed bottom-20 right-6 w-100 h-[600px] bg-white shadow-2xl border rounded-2xl overflow-hidden z-50 animate-slide-up">
                    <iframe
                        src="https://cdn.botpress.cloud/webchat/v3.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/08/28/07/20250828073801-FGYN09XX.json"
                        title="Botpress Chat"
                        className="w-full h-full border-0"
                    />
                </div>
            )}
        </>
    );
}
