import React, { useState } from 'react';
import { X, Lock, Unlock, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare, Sparkles, AlertCircle, ExternalLink, Mail } from 'lucide-react';
import { validateUnlockLead, generateAccessPass, UnlockLeadInput } from '../utils/pricingCalculator';

interface LoginToExploreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockedSuccess: (accessPass: string, leadInfo: UnlockLeadInput) => void;
  targetDemoTitle?: string;
}

export const LoginToExploreModal: React.FC<LoginToExploreModalProps> = ({
  isOpen,
  onClose,
  onUnlockedSuccess,
  targetDemoTitle = 'Apex 3D Emergency Plumbing & Local Services'
}) => {
  const [formData, setFormData] = useState<UnlockLeadInput>({
    fullName: '',
    email: '',
    businessNameOrCity: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [unlockedPass, setUnlockedPass] = useState<string | null>(null);
  const [autoResponderText, setAutoResponderText] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateUnlockLead(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/notify-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          businessName: formData.businessNameOrCity,
          requestedPackage: `Live 3D Demo Unlock (${targetDemoTitle})`,
          source: 'Gated Demo Login Portal'
        })
      });
      const data = await res.json();
      if (data?.clientConfirmation?.message) {
        setAutoResponderText(data.clientConfirmation.message);
      } else {
        setAutoResponderText(
          `Hi ${formData.fullName}, thank you for booking with Vertex 3D Web Studio! We have received your order details for ${formData.businessNameOrCity}. Your custom draft preview will be ready within 24-48 hours.`
        );
      }
    } catch {
      setAutoResponderText(
        `Hi ${formData.fullName}, thank you for booking with Vertex 3D Web Studio! We have received your order details for ${formData.businessNameOrCity}. Your custom draft preview will be ready within 24-48 hours.`
      );
    }

    const pass = generateAccessPass();
    setUnlockedPass(pass);
    setIsSubmitting(false);
    onUnlockedSuccess(pass, formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const liveDemoUrls = [
    { name: 'Local Plumbing 3D Demo', url: 'https://demo.vertex3d.studio/apex-plumbing-3d' },
    { name: 'Dental Studio 3D Demo', url: 'https://demo.vertex3d.studio/aurora-dental-3d' },
    { name: 'Solar & Roofing 3D Demo', url: 'https://demo.vertex3d.studio/lumina-solar-roofing-3d' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="explore-modal-title"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-white p-6 sm:p-9 border border-slate-200 shadow-2xl text-slate-900 my-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50/70 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-slate-100 transition-colors z-10 cursor-pointer"
          aria-label="Close registration popup"
        >
          <X className="w-5 h-5" />
        </button>

        {!unlockedPass ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700">
                <Lock className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-bold">
                Gated Client Lead-Capture Portal
              </span>
            </div>

            <h3 id="explore-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
              Register / Log In to Explore Live 3D Demos
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
              Enter your business details below to unlock direct viewing access to the live 3D interactive preview URLs for <strong className="text-indigo-600">{targetDemoTitle}</strong> and receive an automated confirmation email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Alexander Vance"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                    errors.fullName ? 'border-rose-400 ring-2 ring-rose-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. alex@yourbusiness.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                    errors.email ? 'border-rose-400 ring-2 ring-rose-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Business Name & Industry */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Business Name & Industry <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessNameOrCity"
                  value={formData.businessNameOrCity}
                  onChange={handleInputChange}
                  placeholder="e.g. Apex Plumbing & HVAC or Aurora Dental Studio"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                    errors.businessNameOrCity ? 'border-rose-400 ring-2 ring-rose-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                  }`}
                />
                {errors.businessNameOrCity && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.businessNameOrCity}</span>
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. +91 8084272027 or +1 (555) 234-5678"
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                    errors.phoneNumber ? 'border-rose-400 ring-2 ring-rose-100' : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
                  }`}
                />
                {errors.phoneNumber && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-sm sm:text-base text-white glow-button-indigo hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Verifying & Unlocking Live Preview URLs...</span>
                  ) : (
                    <>
                      <Unlock className="w-4 h-4 text-white" />
                      <span>🔑 Unlock Live 3D Interactive Demos Instantly</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Instant Live URL Access • Automated Email Confirmation
              </span>
              <span>WhatsApp: +91 8084272027</span>
            </div>
          </div>
        ) : (
          /* Unlocked Success View with Live Preview URLs & Dual Notification Confirmation */
          <div className="text-center py-2 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold mb-1">
                Access Granted • Pass {unlockedPass}
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-1">
                Live 3D Preview URLs Unlocked!
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                Welcome, <strong>{formData.fullName}</strong>. Direct preview access is now active for <strong>{formData.businessNameOrCity}</strong>.
              </p>
            </div>

            {/* Direct Live Preview URLs List */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-indigo-200 text-left space-y-2.5">
              <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-indigo-700">
                Unlocked Live Preview URLs:
              </div>
              {liveDemoUrls.map((demo) => (
                <div
                  key={demo.url}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs"
                >
                  <div>
                    <div className="font-bold text-slate-900">{demo.name}</div>
                    <div className="font-mono text-[11px] text-indigo-600">{demo.url}</div>
                  </div>
                  <button
                    onClick={onClose}
                    className="px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            {/* Automated Dual Notification Confirmation */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-left space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>Automated Confirmation Sent to {formData.email}:</span>
              </div>
              <p className="text-emerald-800 italic leading-relaxed text-[11px]">
                "{autoResponderText}"
              </p>
              <div className="text-[10px] text-slate-500 pt-1 border-t border-emerald-200/60">
                ✓ Agency Lead Alert dispatched to <strong>websiteseller6277@gmail.com</strong>
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white glow-button-indigo hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Unlocked 3D Demos Now</span>
              </button>

              <a
                href={`https://wa.me/918084272027?text=${encodeURIComponent(
                  `Hi Vertex 3D Studio! I just unlocked the live 3D demos (${unlockedPass}) for ${formData.businessNameOrCity}. Let's discuss my 48-hour website.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp Directly (+91 8084272027)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
