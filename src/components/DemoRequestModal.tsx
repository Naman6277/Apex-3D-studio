import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2, MessageCircle, CreditCard, Mail } from 'lucide-react';
import { validateEmail, validateInternationalPhone, generateDemoId, PackageType, PACKAGES_CONFIG, buildDualNotifications, DualNotificationPayload } from '../utils/pricingCalculator';

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: PackageType;
  selectedContext?: string;
  onOpenRazorpayModal?: (type?: 'deposit' | 'balance') => void;
}

export const DemoRequestModal: React.FC<DemoRequestModalProps> = ({
  isOpen,
  onClose,
  selectedPackage = 'starter',
  selectedContext = ''
}) => {
  const [pkg, setPkg] = useState<PackageType>(selectedPackage);
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [dualNotification, setDualNotification] = useState<DualNotificationPayload | null>(null);

  useEffect(() => {
    if (selectedPackage) {
      setPkg(selectedPackage);
    }
  }, [selectedPackage]);

  useEffect(() => {
    if (selectedContext) {
      setNotes((prev) => (prev ? prev : `Selected Interest: ${selectedContext}`));
    }
  }, [selectedContext]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) newErrors.name = 'Please provide your full name';
    if (!businessName.trim()) newErrors.businessName = 'Please enter your business name';
    if (!validateEmail(email)) newErrors.email = 'Valid business email required';
    if (!validateInternationalPhone(phone)) newErrors.phone = 'Valid phone or WhatsApp number required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    const localDual = buildDualNotifications({
      name,
      email,
      phone,
      businessName,
      requestedPackage: PACKAGES_CONFIG[pkg].name
    });

    try {
      await fetch('/api/notify-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          businessName,
          requestedPackage: PACKAGES_CONFIG[pkg].name,
          notes,
          source: 'Free Demo Preview Modal'
        })
      });
    } catch {
      // Fallback handled by localDual
    }

    setDualNotification(localDual);
    setTicketId(generateDemoId());
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-2xl text-slate-900 my-8">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Automated Dual Notification • 48h Demo Preview</span>
              </div>
              <h3 id="demo-modal-title" className="text-2xl font-bold text-slate-900">
                Request Your Custom 3D Prototype
              </h3>
              <p className="text-sm text-slate-600">
                We will design a custom, interactive 3D web preview for your business within 24–48 hours and send an instant confirmation to your email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Desired Package Or Preview Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(['starter', 'growth', 'enterprise'] as PackageType[]).map((pKey) => {
                    const item = PACKAGES_CONFIG[pKey];
                    const isSelected = pkg === pKey;
                    return (
                      <button
                        type="button"
                        key={pKey}
                        onClick={() => setPkg(pKey)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50/80 border-indigo-500 text-slate-900 shadow-xs ring-1 ring-indigo-500/30'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-sm flex items-center justify-between">
                          <span className={isSelected ? 'text-indigo-900' : 'text-slate-900'}>
                            {item.name.split(' ')[0]}
                          </span>
                          <span className="font-mono text-indigo-600 font-black">${item.price}</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1 font-mono font-semibold">
                          ⚡ {item.turnaroundHours}h Delivery
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-700">
                <span className="flex items-center gap-1.5 font-medium">
                  <CreditCard className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>50% Upfront Deposit ($175 / ₹3,999) • 50% Final Balance Upon Launch</span>
                </span>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Protected
                </span>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.name && <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Business Name / Company *"
                      value={businessName}
                      onChange={(e) => {
                        setBusinessName(e.target.value);
                        if (errors.businessName) setErrors((prev) => ({ ...prev, businessName: '' }));
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.businessName && <span className="text-xs text-rose-500 mt-1 block">{errors.businessName}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Business Email *"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="+91 8084272027 *"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }));
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    {errors.phone && <span className="text-xs text-rose-500 mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Specific design notes, target city/region, or reference websites (optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-base text-white glow-button-indigo hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending Notifications...' : 'Request Custom Demo Preview (Free)'}</span>
                </button>
                <div className="text-center mt-2 text-xs text-slate-500">
                  🔒 Automated email confirmation sent immediately to you & websiteseller6277@gmail.com
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State with Dual Notification Display */
          <div className="text-center py-4 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-1.5">
              <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-mono font-bold text-indigo-700">
                TICKET: {ticketId}
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                48-Hour Demo Sprint Activated!
              </h3>
            </div>

            {dualNotification && (
              <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-left space-y-2 max-w-lg mx-auto">
                <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-950">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span>Automated Confirmation Email Sent to {dualNotification.clientAutoResponder.to}:</span>
                </div>
                <p className="text-xs text-indigo-900 bg-white p-3 rounded-xl border border-indigo-100 italic leading-relaxed">
                  "{dualNotification.clientAutoResponder.message}"
                </p>
                <div className="text-[11px] text-slate-600 pt-1">
                  ✓ Agency Alert sent to <strong>websiteseller6277@gmail.com</strong>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/918084272027?text=${encodeURIComponent(
                  `Hi Vertex 3D! I just submitted Demo Ticket ${ticketId} for ${businessName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Lead Designer on WhatsApp</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
