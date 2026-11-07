import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, ShieldCheck, CheckCircle2, Phone, MapPin, AlertCircle, ArrowRight } from 'lucide-react';
import {
  ServiceType,
  UrgencyType,
  PropertyType,
  SERVICES_CONFIG,
  calculateQuoteEstimate,
  validatePhoneNumber,
  formatPhoneNumber,
  validatePostalCode,
  generateDispatchId
} from '../utils/quoteCalculator';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceType;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService = 'inspection'
}) => {
  const [service, setService] = useState<ServiceType>(initialService);
  const [urgency, setUrgency] = useState<UrgencyType>('emergency');
  const [property, setProperty] = useState<PropertyType>('residential');
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('78704');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dispatchData, setDispatchData] = useState<{
    id: string;
    countdown: number;
    arrivalEstimate: string;
  } | null>(null);

  // Sync initialService if modal is opened with a preselected service
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Live estimate calculation
  const estimate = calculateQuoteEstimate({
    service,
    urgency,
    property
  });

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (errors.phone && validatePhoneNumber(formatted)) {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZip(e.target.value);
    if (errors.zip && validatePostalCode(e.target.value)) {
      setErrors((prev) => ({ ...prev, zip: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!validatePhoneNumber(phone)) {
      newErrors.phone = 'Valid 10-digit phone number is required';
    }
    if (!address.trim()) {
      newErrors.address = 'Street address is required for dispatch';
    }
    if (!validatePostalCode(zip)) {
      newErrors.zip = 'Valid 5-digit ZIP code is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process submission
    const newId = generateDispatchId();
    setDispatchData({
      id: newId,
      countdown: urgency === 'emergency' ? 28 : 120,
      arrivalEstimate: urgency === 'emergency' ? '28 Minutes' : '1:30 PM - 3:30 PM'
    });
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl rounded-3xl glass-panel-highlight p-6 sm:p-8 border border-cyan-400/30 shadow-2xl bg-[#0D1117] text-white my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white glass-panel hover:border-white/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Instant 3D Transparent Quote & Dispatch</span>
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-white">
                Book Precision Diagnostic & Repair
              </h3>
              <p className="text-sm text-slate-300">
                Pick your service tier, timing, and address. Upfront guaranteed rates with zero surprise charges.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Pick Service */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  1. Select Service Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(Object.keys(SERVICES_CONFIG) as ServiceType[]).map((key) => {
                    const item = SERVICES_CONFIG[key];
                    const isSelected = service === key;
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setService(key)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all ${
                          isSelected
                            ? 'bg-cyan-950/60 border-cyan-400 text-white shadow-md shadow-cyan-500/20'
                            : 'glass-panel border-white/10 text-slate-300 hover:border-white/30'
                        }`}
                      >
                        <div className="font-semibold text-sm flex items-center justify-between">
                          <span className={isSelected ? 'text-cyan-300' : 'text-white'}>
                            {item.title}
                          </span>
                          <span className="font-mono text-xs text-slate-400">
                            ${item.baseMin}+
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1 truncate">
                          {item.tagline}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Timing & Property Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    2. Arrival Urgency
                  </label>
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setUrgency('emergency')}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${
                        urgency === 'emergency'
                          ? 'bg-red-950/40 border-red-500/60 text-white font-semibold'
                          : 'glass-panel text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                        <span>Immediate (Next 30 Mins)</span>
                      </div>
                      <span className="text-[10px] text-red-300 uppercase">Emergency</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUrgency('same-day')}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${
                        urgency === 'same-day'
                          ? 'bg-cyan-950/40 border-cyan-400 text-white font-semibold'
                          : 'glass-panel text-slate-300'
                      }`}
                    >
                      <span>Same-Day (2-4 Hr Window)</span>
                      <span className="text-[10px] text-cyan-300">Standard</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUrgency('scheduled')}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${
                        urgency === 'scheduled'
                          ? 'bg-violet-950/40 border-violet-400 text-white font-semibold'
                          : 'glass-panel text-slate-300'
                      }`}
                    >
                      <span>Advance Scheduled</span>
                      <span className="text-[10px] text-emerald-400">Save 5%</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Property Classification
                  </label>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <button
                      type="button"
                      onClick={() => setProperty('residential')}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        property === 'residential'
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'glass-panel text-slate-300'
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setProperty('commercial')}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        property === 'commercial'
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'glass-panel text-slate-300'
                      }`}
                    >
                      Commercial
                    </button>
                  </div>

                  {/* Dynamic Price Estimate Card */}
                  <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-300">Estimated Upfront:</span>
                      <span className="text-lg font-bold font-mono text-cyan-300">
                        {estimate.formattedRange}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {estimate.waiverNote}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Contact & Address Details */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  3. Contact & Service Address
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-400"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (e.g. 555-019-2831)"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-400"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-400 mt-1 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="Street Address (e.g. 1402 S Congress Ave)"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors((prev) => ({ ...prev, address: '' }));
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-400"
                    />
                    {errors.address && (
                      <span className="text-xs text-red-400 mt-1 block">{errors.address}</span>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      value={zip}
                      onChange={handleZipChange}
                      className="w-full px-3.5 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-400"
                    />
                    {errors.zip && (
                      <span className="text-xs text-red-400 mt-1 block">{errors.zip}</span>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="Brief description of leak, cooling issue, or unit model (optional)"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl glass-input text-sm text-white placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-base text-white glow-button hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Confirm Dispatch & Request Booking</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="text-center mt-2.5 text-xs text-slate-400">
                  🔒 Zero credit card required upfront • Free cancellation prior to arrival
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/50 text-xs font-mono font-bold text-cyan-300 tracking-wider">
                DISPATCH ID: {dispatchData?.id}
              </span>
              <h3 className="text-2xl font-bold text-white">
                Technician Dispatched & En Route!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our Austin mobile diagnostics van has been assigned to your address: <strong>{address}, {zip}</strong>.
              </p>
            </div>

            {/* Simulated Live Arrival Card */}
            <div className="p-5 rounded-2xl glass-panel border border-cyan-500/30 max-w-md mx-auto space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Estimated Arrival Time:</span>
                <span className="font-mono text-cyan-300 font-bold text-base animate-pulse">
                  ~{dispatchData?.arrivalEstimate}
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-violet-500 h-2 rounded-full w-3/4 animate-pulse" />
              </div>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span>Lead Technician: <strong>Marcus Brody (#M-49201)</strong></span>
                <span className="text-emerald-400 font-medium">Van #4 (GPS Active)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="tel:5550192831"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Technician Direct: (555) 019-2831</span>
              </a>
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl glass-panel hover:bg-white/10 text-slate-200 text-sm font-medium"
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
