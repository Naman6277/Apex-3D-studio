import React from 'react';
import { Mail, MessageCircle, Clock, ShieldCheck, ArrowUpRight, CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-24 md:pb-16 text-slate-600 text-sm relative z-10 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Studio Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center p-0.5 shadow-sm">
                <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center">
                  <span className="text-indigo-600 font-extrabold text-sm">V3D</span>
                </div>
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                Vertex 3D Web Studio
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              We design high-converting, ultra-fast 3D web experiences for local and international service businesses. Delivered turnkey in 48 hours.
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <a
                href="https://wa.me/918084272027"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs hover:text-emerald-800 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +91 8084272027</span>
              </a>
              <a
                href="mailto:websiteseller6277@gmail.com"
                className="inline-flex items-center gap-2 text-indigo-700 font-bold text-xs hover:text-indigo-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>websiteseller6277@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Offered */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Agency Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  Custom 3D & Glassmorphic Web Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  Mobile-First Conversion Layouts
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  Interactive Before/After Sliders
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  Turnkey DNS & Domain Migration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600 transition-colors">
                  24/7 Managed Cloud Hosting & Backups
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Sample Demos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Sample Industry Demos
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#portfolio" className="hover:text-indigo-600 transition-colors">
                  Emergency Plumbing & HVAC 3D Demo
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-indigo-600 transition-colors">
                  Clean Energy & Solar Showcase
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-indigo-600 transition-colors">
                  Luxury Cosmetic Dental Aesthetics
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-indigo-600 transition-colors">
                  Turnkey 3D Website ($350 - 50/50 Model)
                </a>
              </li>
              <li>
                <a href="#razorpay" className="hover:text-indigo-600 transition-colors">
                  Instant Razorpay Slot Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Guarantees */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Studio Guarantees
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>48-Hour delivery guarantee or 100% refund</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Pay 50% only after reviewing completed site</span>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                <span>Direct senior designer communication on WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Vertex 3D Web Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-800 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-800 cursor-pointer">48-Hour SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
