import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, CreditCard, Bot } from 'lucide-react';

interface NavbarProps {
  onOpenDemoRequest: () => void;
  onOpenRazorpayModal: (type?: 'deposit' | 'balance') => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemoRequest,
  onOpenRazorpayModal,
  onOpenChat
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand wordmark */}
        <a
          href="/"
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
              <span className="text-indigo-600 font-black text-sm tracking-tighter">V3D</span>
            </div>
          </div>
          <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent font-black">
            Vertex 3D Studio
          </span>
        </a>

        {/* Zone 2: Clean concise navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#about" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            About Us
          </a>
          <a href="#why-choose-us" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            Why Choose Us
          </a>
          <a href="#portfolio" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            3D Demos
          </a>
          <a href="#insights" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            Insights
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenChat}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 transition-all cursor-pointer"
            title="Chat with Vertex AI Assistant"
          >
            <Bot className="w-4 h-4 text-indigo-600" />
            <span>AI Advisor</span>
          </button>

          <button
            onClick={onOpenDemoRequest}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white glow-button-indigo hover:opacity-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-white/90" />
            <span>Request Free Demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenChat}
            className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 cursor-pointer"
            aria-label="AI Assistant"
          >
            <Bot className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/98 border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              About Vertex 3D Studio
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Why Business Owners Choose Us
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Live Portfolio 3D Demos
            </a>
            <a
              href="#insights"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Web Growth & 3D Design Insights
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50"
            >
              Direct WhatsApp & Email Contact
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRazorpayModal('deposit');
              }}
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-cyan-400" />
              <span>Book with 50% Deposit via Razorpay</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoRequest();
              }}
              className="w-full py-3 rounded-xl glow-button-indigo text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Free Demo Preview</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
