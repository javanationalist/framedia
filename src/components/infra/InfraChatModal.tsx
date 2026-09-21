import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, RefreshCw, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { geminiService } from '../../services/gemini';
import { ChatMessage } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Language } from '../../types/language';
import { ThemeToggle } from '../common/ThemeToggle';

interface InfraChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (path: string) => void;
}

const getInitialGreeting = (lang: Language): ChatMessage => ({
  id: 'greeting',
  sender: 'inFra',
  text: lang === 'id'
    ? `Halo, saya inFra — asisten AI dari Framedia Creative. Apa yang ingin Anda ketahui?\n\nAnda dapat bertanya mengenai inisiatif unggulan kami Frametive Project, 10 prinsip Being Creative, piagam AI Ethics, atau bagaimana kami menerapkan produksi kreatif yang inklusif.`
    : `Hi, I'm inFra — Framedia Creative's AI assistant. What would you like to explore?\n\nYou can ask me about our flagship Frametive Project, our 10 Being Creative principles, our AI Ethics Charter, or how we approach inclusive creative production.`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  suggestedQuestions: lang === 'id'
    ? [
        'Apa itu Frametive Project?',
        'Bagaimana sikap Framedia terhadap AI Ethics?',
        'Jelaskan 10 prinsip Being Creative',
        'Layanan apa saja yang disediakan Framedia?',
      ]
    : [
        'What is the Frametive Project?',
        'What is Framedia’s stance on AI Ethics?',
        'Explain the 10 Being Creative principles',
        'What services does Framedia provide?',
      ],
});

export const InfraChatModal: React.FC<InfraChatModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const { theme, isDark } = useTheme();
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>(() => [getInitialGreeting(language)]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modelInfo, setModelInfo] = useState<string>('Gemini 2.5 Flash');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update initial greeting if user hasn't sent any messages yet when language changes
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'greeting') {
        return [getInitialGreeting(language)];
      }
      return prev;
    });
  }, [language]);

  useEffect(() => {
    geminiService.checkConfig().then((cfg) => {
      if (cfg?.model) {
        setModelInfo(cfg.model);
      }
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
      return () => {
        document.body.style.overflow = originalOverflow;
        clearTimeout(timer);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await geminiService.sendMessage(query, newHistory, language);
      const assistantMessage: ChatMessage = {
        id: `infra-${Date.now()}`,
        sender: 'inFra',
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedQuestions: response.suggestedQuestions,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'inFra',
        text: language === 'id'
          ? 'Mohon maaf, terjadi gangguan koneksi sementara. Tim Framedia Creative tetap dapat dihubungi melalui hello@framedia.creative.'
          : 'I apologize, but I encountered a temporary connection issue. Framedia Creative remains available at hello@framedia.creative.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([getInitialGreeting(language)]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] isolate flex items-end sm:items-center justify-center sm:justify-end sm:p-6 pointer-events-none">
          {/* Layer 2: Backdrop (intercepts backdrop clicks only) */}
          <motion.div
            key="infra-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            id="infra-modal-backdrop"
            className="absolute inset-0 z-10 pointer-events-auto bg-black/70 sm:bg-black/45 backdrop-blur-xs cursor-pointer"
            aria-label="Close inFra chat overlay"
          />

          {/* Layer 3: inFra Chat Window (HIGHEST INTERACTIVE LAYER) */}
          <motion.div
            key="infra-window"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            id="infra-chat-window"
            role="dialog"
            aria-modal="true"
            aria-label="inFra AI Assistant Chat"
            className={`relative z-20 pointer-events-auto w-full sm:max-w-md h-[92dvh] sm:h-[620px] max-h-[100dvh] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border ${
              isDark
                ? 'bg-[#0e1013] border-zinc-700/80 text-zinc-100'
                : 'bg-white border-zinc-300 text-zinc-900'
            }`}
          >
            {/* Header */}
            <div className={`p-4 border-b flex items-center justify-between ${
              isDark ? 'bg-[#14171b] border-zinc-800' : 'bg-[#f4f2ed] border-zinc-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center border ${
                  isDark ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-zinc-300 shadow-xs'
                }`}>
                  <Bot className="w-4 h-4 text-emerald-500" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-900" />
                </div>
                <div>
                  <h3 className={`font-display font-bold text-sm tracking-wide ${
                    isDark ? 'text-white' : 'text-zinc-950'
                  }`}>inFra</h3>
                  <p className={`text-[11px] font-mono ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    Model: {modelInfo}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Theme toggle directly inside chat header */}
                <ThemeToggle variant="icon" />

                <button
                  onClick={handleResetChat}
                  title={t('infra.clear_chat')}
                  className={`p-1.5 transition-colors rounded-lg cursor-pointer ${
                    isDark ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                  }`}
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className={`p-1.5 transition-colors rounded-lg cursor-pointer ${
                    isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/60' : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                  }`}
                  aria-label={t('common.close')}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                      msg.sender === 'user'
                        ? isDark
                          ? 'bg-zinc-100 text-zinc-950 font-medium'
                          : 'bg-[#121316] text-[#f8f7f4] font-medium'
                        : msg.isError
                        ? 'bg-red-950/40 border border-red-800/60 text-red-200'
                        : isDark
                        ? 'bg-[#181b20] border border-zinc-800 text-zinc-200'
                        : 'bg-[#f4f2ed] border border-[rgba(0,0,0,0.09)] text-[#1e2024]'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1 opacity-60 text-[10px] uppercase font-mono">
                      {msg.sender === 'user' ? (
                        <>
                          <User className="w-3 h-3" />
                          <span>{language === 'id' ? 'Anda' : 'You'}</span>
                        </>
                      ) : (
                        <>
                          <Bot className="w-3 h-3 text-emerald-400" />
                          <span>{language === 'id' ? 'Asisten inFra' : 'inFra Assistant'}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div className="whitespace-pre-wrap leading-relaxed text-[13px]">
                      {msg.text}
                    </div>
                  </div>

                  {/* Suggested follow-up questions */}
                  {msg.suggestedQuestions && msg.suggestedQuestions.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[90%]">
                      {msg.suggestedQuestions.map((q, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(q)}
                          disabled={isLoading}
                          className={`text-left text-[11px] font-mono px-2.5 py-1 rounded-md transition-colors cursor-pointer disabled:opacity-50 ${
                            isDark
                              ? 'bg-zinc-900 border border-zinc-700/80 hover:border-zinc-500 text-zinc-300 hover:text-white'
                              : 'bg-white border border-[rgba(0,0,0,0.12)] hover:border-[rgba(0,0,0,0.25)] text-[#2a2e37] hover:bg-[#f4f2ed] shadow-xs'
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start">
                  <div className={`border rounded-2xl px-4 py-3 flex items-center gap-2 ${
                    isDark
                      ? 'bg-[#181b20] border-zinc-800'
                      : 'bg-[#f4f2ed] border-[rgba(0,0,0,0.09)]'
                  }`}>
                    <Bot className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce"></span>
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono ml-1">{t('infra.thinking')}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar (Fixed at bottom of modal, always above virtual keyboard) */}
            <div className={`shrink-0 p-3 pb-[max(0.85rem,env(safe-area-inset-bottom))] border-t ${
              isDark ? 'bg-[#14171b] border-zinc-800' : 'bg-[#f4f2ed] border-[rgba(0,0,0,0.12)]'
            }`}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t('infra.placeholder')}
                  disabled={isLoading}
                  id="infra-chat-input"
                  autoComplete="off"
                  spellCheck="false"
                  className={`flex-1 rounded-xl px-3.5 py-3 sm:py-2.5 text-base sm:text-xs focus:outline-none transition-colors ${
                    isDark
                      ? 'bg-zinc-900 border border-zinc-700 focus:border-zinc-400 text-white placeholder-zinc-500'
                      : 'bg-white border border-[rgba(0,0,0,0.18)] focus:border-[#121316] text-[#121316] placeholder-[#575c68]'
                  }`}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  id="infra-chat-send"
                  className={`p-3 sm:p-2.5 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 cursor-pointer shrink-0 ${
                    isDark
                      ? 'bg-white text-black hover:bg-zinc-200'
                      : 'bg-[#121316] text-[#f8f7f4] hover:bg-[#282a30]'
                  }`}
                  aria-label={t('infra.send')}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

