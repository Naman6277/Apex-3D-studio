import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenDemoRequest?: () => void;
  onOpenRazorpayModal?: () => void;
  onOpenChat?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = () => {
  return (
    <aside
      aria-label="Mobile Quick Conversion Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.06)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Button 1: Call Agency (Click-to-call) */}
        <a
          href="tel:+918084272027"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl font-bold text-xs text-white glow-button-indigo active:scale-95 transition-transform whitespace-nowrap text-center cursor-pointer shadow-xs"
          aria-label="Call Agency"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>📞 Call Agency</span>
        </a>

        {/* Button 2: WhatsApp Chat */}
        <a
          href="https://wa.me/918084272027?text=Hi%20Vertex%203D%20Web%20Studio%2C%20I%20want%20to%20book%20my%2048-hour%203D%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl font-bold text-xs text-emerald-900 bg-emerald-50 border border-emerald-300 active:scale-95 transition-transform whitespace-nowrap text-center cursor-pointer shadow-xs"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
          <span>💬 WhatsApp Chat</span>
        </a>
      </div>
    </aside>
  );
};
