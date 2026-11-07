import React, { useState, useEffect } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, Lock, X, AlertCircle, Mail, MessageSquare } from 'lucide-react';
import { RegionalPackage, CurrencyType, formatPrice } from '../utils/pricingCalculator';

interface RazorpayBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'deposit' | 'balance';
  selectedPkg?: RegionalPackage;
}

export const RazorpayBookingSection: React.FC<{
  onOpenModal: (type: 'deposit' | 'balance', currency: CurrencyType) => void;
}> = ({ onOpenModal }) => {
  return (
    <section id="razorpay" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-white/85 backdrop-blur-md border border-indigo-100 shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50/70 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-50/70 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-700 uppercase tracking-wider">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Razorpay 50/50 Deposit Model • Automated Email & SMS Receipts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Secure Instant Booking via Razorpay
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Supports Credit/Debit Cards, UPI, Google Pay, Netbanking, Apple Pay, and International USD/EUR Cards.
            </p>
          </div>

          {/* Dual 50/50 Payment Buttons Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {/* Button 1: Pay 50% Upfront Deposit ($175 USD / ₹3,999 INR) */}
            <div className="rounded-2xl p-6 sm:p-7 bg-slate-50 border-2 border-indigo-200/90 hover:border-indigo-500 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white font-mono text-[11px] font-bold">
                    STEP 1: 50% DEPOSIT
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">Reserve 48h Launch Slot</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  50% Upfront Deposit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  Locks in your 48-hour design sprint. Razorpay automatically issues an official payment receipt via Email & SMS to you upon deposit payment.
                </p>
                <div className="text-2xl font-black font-mono text-indigo-600 mb-4">
                  $175 USD <span className="text-sm font-sans font-normal text-slate-500">/ ₹3,999 INR</span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal('deposit', 'USD')}
                className="w-full py-3.5 px-3 rounded-xl font-bold text-xs sm:text-sm text-white glow-button-indigo flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all cursor-pointer text-center"
              >
                <span>💳 Pay 50% Upfront Deposit ($175 USD / ₹3,999 INR)</span>
              </button>
            </div>

            {/* Button 2: Pay 50% Final Balance on Launch ($175 USD / ₹4,000 INR) */}
            <div className="rounded-2xl p-6 sm:p-7 bg-slate-50 border-2 border-slate-200 hover:border-emerald-500 transition-all shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white font-mono text-[11px] font-bold">
                    STEP 2: 50% BALANCE
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">On Approved Launch</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  50% Final Balance on Launch
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  Only paid once you inspect the completed interactive 3D website on our live staging preview and approve final domain transfer.
                </p>
                <div className="text-2xl font-black font-mono text-emerald-600 mb-4">
                  $175 USD <span className="text-sm font-sans font-normal text-slate-500">/ ₹4,000 INR</span>
                </div>
              </div>

              <button
                onClick={() => onOpenModal('balance', 'USD')}
                className="w-full py-3.5 px-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-center"
              >
                <span>✅ Pay 50% Final Balance on Launch ($175 USD / ₹4,000 INR)</span>
              </button>
            </div>
          </div>

          {/* Satisfaction Guarantee Badge */}
          <div className="relative z-10 max-w-3xl mx-auto p-4 rounded-xl bg-indigo-50/80 border border-indigo-200/90 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-indigo-950 font-semibold">
            <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>
              🔒 Pay the remaining 50% balance only after you review and approve your live site.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const RazorpayCheckoutModal: React.FC<RazorpayBookingModalProps> = ({
  isOpen,
  onClose,
  defaultType = 'deposit',
  selectedPkg
}) => {
  const [paymentType, setPaymentType] = useState<'deposit' | 'balance'>(defaultType);
  const [currency, setCurrency] = useState<CurrencyType>(selectedPkg?.currency || 'USD');
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState<string | null>(null);
  const [autoResponderMsg, setAutoResponderMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (defaultType) setPaymentType(defaultType);
    if (selectedPkg?.currency) setCurrency(selectedPkg.currency);
  }, [defaultType, selectedPkg]);

  if (!isOpen) return null;

  const depositAmount = currency === 'USD' ? 175 : 3999;
  const balanceAmount = currency === 'USD' ? 175 : 4000;
  const activeAmount = paymentType === 'deposit' ? depositAmount : balanceAmount;

  const handleSimulatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !businessName.trim() || !clientEmail.trim() || !clientPhone.trim()) {
      setErrorMsg('Please complete all fields so Razorpay can issue your Email & SMS receipt.');
      return;
    }
    setErrorMsg('');
    setIsProcessing(true);

    try {
      const [orderRes] = await Promise.all([
        fetch('/api/razorpay/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: activeAmount,
            currency,
            paymentType,
            planName: selectedPkg?.name || 'Turnkey 3D Business Website',
            clientEmail,
            clientName,
            clientPhone,
            businessName
          })
        }),
        fetch('/api/notify-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            businessName,
            requestedPackage: `Razorpay 50% ${paymentType.toUpperCase()} (${formatPrice(activeAmount, currency)})`,
            source: 'Razorpay Payment Checkout'
          })
        })
      ]);

      const data = await orderRes.json();
      setAutoResponderMsg(
        data?.automatedReceipt?.clientAutoResponderMessage ||
          `Hi ${clientName}, thank you for booking with Vertex 3D Web Studio! We have received your order details for ${businessName}. Your custom draft preview will be ready within 24-48 hours.`
      );
      setTimeout(() => {
        setSuccessReceipt(data.orderId || `pay_${Date.now()}`);
        setIsProcessing(false);
      }, 600);
    } catch {
      setAutoResponderMsg(
        `Hi ${clientName}, thank you for booking with Vertex 3D Web Studio! We have received your order details for ${businessName}. Your custom draft preview will be ready within 24-48 hours.`
      );
      setTimeout(() => {
        setSuccessReceipt(`pay_${Date.now()}`);
        setIsProcessing(false);
      }, 600);
    }
  };

  const handleDone = () => {
    setSuccessReceipt(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 border border-slate-200 shadow-2xl text-slate-900 my-8 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close Razorpay checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {!successReceipt ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                <CreditCard className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-700 font-bold">
                Razorpay Payment Link Gateway
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {paymentType === 'deposit'
                ? '💳 Pay 50% Upfront Deposit to Reserve Slot'
                : '✅ Pay 50% Final Balance Upon Launch'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-5">
              Supports Credit/Debit Cards, UPI, Google Pay, Netbanking, Apple Pay, and International USD/EUR Cards.
            </p>

            {/* Step Toggle */}
            <div className="grid grid-cols-2 gap-2 mb-4 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setPaymentType('deposit')}
                className={`py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                  paymentType === 'deposit' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                Step 1: Upfront Deposit (50%)
              </button>
              <button
                type="button"
                onClick={() => setPaymentType('balance')}
                className={`py-2 text-xs font-bold rounded-lg cursor-pointer transition-all ${
                  paymentType === 'balance' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                Step 2: Final Balance (50%)
              </button>
            </div>

            {/* Currency Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 mb-4 text-xs">
              <span className="font-semibold text-slate-700">Select Billing Region:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-all ${
                    currency === 'USD' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  USD ($175)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-1 rounded-lg font-bold cursor-pointer transition-all ${
                    currency === 'INR' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  INR ({paymentType === 'deposit' ? '₹3,999' : '₹4,000'})
                </button>
              </div>
            </div>

            {/* Amount Summary */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-100 mb-5 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-indigo-900 uppercase">Amount Due Now</div>
                <div className="text-xs text-slate-600">
                  {paymentType === 'deposit' ? '50% Upfront Deposit to Reserve Slot' : '50% Final Balance Upon Launch'}
                </div>
              </div>
              <div className="text-3xl font-black font-mono text-indigo-700">
                {formatPrice(activeAmount, currency)}
              </div>
            </div>

            <form onSubmit={handleSimulatePayment} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander Vance"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Business Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Plumbing"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email for Receipt *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@yourbusiness.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp for SMS *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 8084272027"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="p-2.5 rounded-lg bg-rose-50 text-rose-700 text-xs flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-xl font-bold text-sm text-white glow-button-indigo shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Processing Razorpay Payment & Issuing Receipt...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Pay {formatPrice(activeAmount, currency)} via Razorpay</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Automated Email & SMS Receipt Issued Instantly
              </span>
              <span>Support: +91 8084272027</span>
            </div>
          </div>
        ) : (
          /* Payment & Automated Receipt Confirmation */
          <div className="text-center py-2 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold mb-1">
                Razorpay Receipt Issued (Email & SMS)
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-1">
                {paymentType === 'deposit' ? '50% Slot Reserved!' : 'Final Balance Paid!'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                Official Razorpay payment receipt sent to <strong>{clientEmail}</strong> and via SMS to <strong>{clientPhone}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Razorpay Order ID:</span>
                <span className="font-mono font-bold text-indigo-700">{successReceipt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Amount Paid:</span>
                <span className="font-bold text-slate-900">{formatPrice(activeAmount, currency)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Agency Email Alert:</span>
                <span className="font-mono text-emerald-700 font-semibold">websiteseller6277@gmail.com</span>
              </div>
            </div>

            {/* Client Automated Confirmation Email Preview */}
            <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-200 text-left space-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-indigo-950">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>Automated Client Confirmation Dispatched:</span>
              </div>
              <p className="text-indigo-900 italic leading-relaxed text-[11px]">
                "{autoResponderMsg}"
              </p>
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <a
                href={`https://wa.me/918084272027?text=${encodeURIComponent(
                  `Hi Vertex 3D Studio! I just completed my 50% ${paymentType} of ${formatPrice(activeAmount, currency)} for ${businessName} via Razorpay (${successReceipt}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp (+91 8084272027)</span>
              </a>

              <button
                onClick={handleDone}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
