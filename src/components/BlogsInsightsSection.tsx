import React, { useState } from 'react';
import { BookOpen, ArrowRight, X, Clock, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';
import { TiltCard } from './TiltCard';

interface BlogArticle {
  id: string;
  tag: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  keyStat: string;
  keyStatLabel: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  takeaways: string[];
}

interface BlogsInsightsSectionProps {
  onOpenDemoRequest: (context?: string) => void;
}

export const BlogsInsightsSection: React.FC<BlogsInsightsSectionProps> = ({
  onOpenDemoRequest
}) => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const articles: BlogArticle[] = [
    {
      id: '3d-websites-double-conversions-2026',
      tag: '3D WebGL & Conversion Science',
      readTime: '4 Min Read',
      date: '2026 Conversion Report',
      title: 'Why 3D Interactive Websites Double Mobile Conversion Rates in 2026',
      excerpt: 'Discover how interactive 3D depth, tilt-responsive cards, and light-mode glassmorphism capture homeowner attention in under 3 seconds and double inbound estimate requests.',
      keyStat: '2.4x',
      keyStatLabel: 'Higher Mobile Lead Conversion Rate',
      sections: [
        {
          heading: '1. Breaking Through "Flat Template Blindness"',
          body: 'In 2026, consumers compare 4 to 6 local service providers on their smartphones before making a call. Standard flat WordPress or Wix templates all look identical, causing visitors to bounce within 4 seconds. Interactive 3D depth and subtle perspective motion create an immediate visual pattern interrupt that signals premium quality and technical trustworthiness.'
        },
        {
          heading: '2. Touch-Responsive Micro-Interactions Boost Engagement',
          body: 'When pricing blocks, service badges, and before/after sliders respond smoothly to a user’s finger on mobile devices, average time-on-page increases by 165%. Longer engagement directly correlates with higher form completion and click-to-call rates.'
        },
        {
          heading: '3. Sub-Second Speed With Hardware-Accelerated CSS & WebGL',
          body: 'Modern 3D web architecture no longer means heavy loading screens. By using hardware-accelerated CSS 3D perspective transforms and lightweight geometric shaders in crisp light mode, Vertex 3D websites load in under 0.9 seconds on 4G/5G connections.'
        }
      ],
      takeaways: [
        'Replace static hero banners with interactive 3D visualizers and clear 48-hour value propositions.',
        'Use bright light-mode glassmorphism (#FFFFFF / #F8FAFC) with electric indigo accents for maximum readability outdoors.',
        'Pair 3D interactive cards with instant click-to-call and WhatsApp buttons.'
      ]
    },
    {
      id: 'local-businesses-lose-60-percent-without-click-to-call',
      tag: 'Mobile UX & Lead Capture',
      readTime: '3 Min Read',
      date: 'Local Service Study',
      title: 'How Local Service Businesses Lose 60% of Clients Without Click-to-Call Buttons',
      excerpt: 'Over 78% of emergency plumbing, roofing, and dental searches happen on mobile devices. Learn why burying your phone number costs you 6 out of 10 high-intent customers.',
      keyStat: '60%',
      keyStatLabel: 'Leads Lost to Friction-Heavy Mobile Menus',
      sections: [
        {
          heading: '1. The 3-Second Emergency Rule',
          body: 'When a homeowner has a burst pipe, a leaking roof, or a sudden toothache, they are stressed and browsing with one thumb on their phone. If they have to pinch-to-zoom, copy-paste a phone number, or hunt through a hamburger menu to contact you, 60% will hit the back button and call the next competitor on Google.'
        },
        {
          heading: '2. Sticky Bottom Action Bars Convert Thumb Traffic',
          body: 'Placing a persistent sticky bottom bar with "📞 Call Agency" and "💬 WhatsApp Chat" keeps your primary conversion triggers permanently within the natural thumb zone—resulting in an immediate surge in inbound calls.'
        },
        {
          heading: '3. Instant Automated Email & WhatsApp Confirmation',
          body: 'For visitors browsing after hours, an instant 4-field booking form connected to automated email and WhatsApp notifications locks in the lead before they look elsewhere.'
        }
      ],
      takeaways: [
        'Always display a fixed mobile bottom bar with 1-tap Call and WhatsApp buttons.',
        'Eliminate horizontal scrolling and tiny tap targets across iOS and Android viewports.',
        'Trigger automated client confirmation emails within seconds of form submission.'
      ]
    },
    {
      id: '5-essential-website-features-plumber-dentist-contractor',
      tag: 'Industry Playbook',
      readTime: '5 Min Read',
      date: 'Growth Checklist',
      title: '5 Essential Website Features Every Plumber, Dentist, & Contractor Needs',
      excerpt: 'From interactive Before/After transformation sliders to transparent price anchoring and automated dual notifications—here are the 5 non-negotiable elements of a high-ROI service site.',
      keyStat: '3.8x',
      keyStatLabel: 'Average Return on Ad Spend Lift',
      sections: [
        {
          heading: 'Feature 1 & 2: Above-the-Fold Trust Bar & Interactive Before/After Sliders',
          body: 'Homeowners and patients buy on visual proof and verified trust. An interactive Before/After comparison slider (e.g., damaged pipe vs. 3D repaired system, or smile simulation) paired with a verified review badge bar builds instant credibility.'
        },
        {
          heading: 'Feature 3 & 4: Gated Demo/Offer Portals & Transparent Price Anchoring',
          body: 'Presenting clear package options with strikethrough price anchoring removes buyer hesitation, while a gated preview or instant quote calculator captures high-intent client emails automatically.'
        },
        {
          heading: 'Feature 5: Automated Dual Notifications & 50/50 Payment Confidence',
          body: 'Connecting your booking funnel to Web3Forms and Razorpay ensures both you and your client receive instant confirmation receipts, turning website traffic into booked appointments 24/7.'
        }
      ],
      takeaways: [
        'Show visual proof immediately with interactive 3D cards and Before/After sliders.',
        'Capture client emails with gated interactive previews and instant auto-responders.',
        'Offer transparent pricing and frictionless mobile booking.'
      ]
    }
  ];

  return (
    <section id="insights" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs uppercase tracking-widest font-bold text-indigo-700">
            <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            <span>Authority & Conversion Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Web Growth & 3D Design Insights
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Tips & strategies to help local businesses scale online
          </p>
        </div>

        {/* 3 Blog Article Preview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <TiltCard key={article.id} glowColor={index === 1 ? 'cyan' : 'indigo'} className="h-full">
              <article className="h-full rounded-3xl bg-white/85 backdrop-blur-md p-7 sm:p-8 border border-slate-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-indigo-400/80 transition-all flex flex-col justify-between">
                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[11px] font-mono font-bold text-indigo-700">
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Highlight Metric Box */}
                  <div className="mb-5 p-4 rounded-2xl bg-gradient-to-r from-slate-50 via-indigo-50/50 to-cyan-50/50 border border-slate-200/80 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                        Key Benchmark
                      </div>
                      <div className="text-xs font-semibold text-slate-700">
                        {article.keyStatLabel}
                      </div>
                    </div>
                    <div className="text-2xl font-black font-mono text-indigo-600 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>{article.keyStat}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Full Article Modal Trigger Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-indigo-700 bg-indigo-50 hover:bg-indigo-600 hover:text-white border border-indigo-200/80 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 sm:p-10 border border-slate-200 shadow-2xl text-slate-900 my-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Article Header */}
              <div className="space-y-2 border-b border-slate-100 pb-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold">
                    {selectedArticle.tag}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-600 font-semibold">{selectedArticle.readTime}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-emerald-700 font-bold">{selectedArticle.date}</span>
                </div>

                <h3 id="article-modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>

              {/* Article Body Sections */}
              <div className="space-y-5">
                {selectedArticle.sections.map((sec, i) => (
                  <div key={i} className="space-y-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {sec.heading}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Actionable Takeaways */}
              <div className="p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-950">
                  Key Actionable Takeaways for Business Owners:
                </div>
                <ul className="space-y-2">
                  {selectedArticle.takeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-600">
                  Want these exact conversion strategies built into your website in 48 hours?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const articleTitle = selectedArticle.title;
                      setSelectedArticle(null);
                      onOpenDemoRequest(`Inspired by Article: ${articleTitle}`);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white glow-button-indigo hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>🚀 Request a Free Demo Preview</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
