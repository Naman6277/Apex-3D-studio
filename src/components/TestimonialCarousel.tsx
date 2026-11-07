import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle, ShieldCheck, Quote } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  role: string;
  stars: number;
  service: string;
  timeToArrival: string;
  quote: string;
  outcome: string;
}

export const TestimonialCarousel: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 'rev-1',
      name: 'Sarah Jenkins',
      location: 'Austin, TX (Zilker Neighborhood)',
      avatar: '/src/assets/images/customer_avatar_sarah_1793991979531.jpg',
      role: 'Homeowner',
      stars: 5,
      service: 'Emergency Water Main Burst',
      timeToArrival: '23 Minutes (Sunday 2:15 AM)',
      quote: 'Our basement main line ruptured in the middle of a freezing night. Apex had a technician at our door in 23 minutes flat with a 3D acoustic leak finder. They pinpointed the break without demolishing our finished tile, soldered a reinforced sleeve, and had our water back on before 4:00 AM. Zero overtime markup.',
      outcome: 'Saved estimated $14,000 in drywall and flooring water damage.'
    },
    {
      id: 'rev-2',
      name: 'David Reynolds',
      location: 'Westlake Hills, TX',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      role: 'Property Owner',
      stars: 5,
      service: 'Emergency AC Heat Pump Failure',
      timeToArrival: '28 Minutes (Mid-August Heatwave)',
      quote: 'Our central cooling compressor gave out when outdoor temps hit 104°F with elderly family visiting. Apex arrived with a fully equipped mobile unit, diagnosed the burnt inverter board, and completed a temporary cool-down bypass before installing an ultra-efficient 22-SEER unit the following morning.',
      outcome: 'Home cooled back to 70°F in 45 mins. Energy bills dropped 34%.'
    },
    {
      id: 'rev-3',
      name: 'Elena Morales',
      location: 'Round Rock, TX',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      role: 'Homeowner',
      stars: 5,
      service: '3D Endoscopic Sewer & Pipe Scan',
      timeToArrival: 'Same-Day Priority Window',
      quote: 'Three other plumbers told me we needed to dig up our entire 40-foot driveway for $18,000. Apex ran their 3D endoscopic laser camera through the vent stack and showed me in 4K that it was just a localized root intrusion at the curb joint. They hydro-jetted and lined it cleanly for a fraction of the cost.',
      outcome: 'Saved the brick driveway and over $12,500 in excavation fees.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section id="reviews" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with aggregate social proof */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
            Real Homeowner Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted In Over 2,400+ Emergencies
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.9 / 5.0</span>
            <span className="text-slate-500">·</span>
            <span>250+ Verified Google & Angi Reviews</span>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <TiltCard glowColor="violet">
            <div className="rounded-3xl glass-panel-highlight p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-2xl">
              {/* Watermark Quote Icon */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/[0.03] pointer-events-none rotate-12" />

              <div className="relative z-10 space-y-6">
                {/* Review Header: User Profile + Service Pill */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-4">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400/40 shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-white">{current.name}</h4>
                        <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Verified Client</span>
                        </span>
                      </div>
                      <div className="text-xs text-slate-400">{current.location}</div>
                      <div className="flex text-amber-400 mt-1">
                        {[...Array(current.stars)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-cyan-300 font-medium block">
                      {current.service}
                    </span>
                    <span className="text-xs font-mono text-emerald-300 flex items-center sm:justify-end gap-1 mt-0.5">
                      <span>⚡ Arrival: {current.timeToArrival}</span>
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic">
                  "{current.quote}"
                </p>

                {/* Outcome Callout Box */}
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs sm:text-sm text-cyan-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>Quantified Result:</strong> {current.outcome}</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevReview}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
