import React, { useState } from 'react';
import { InteractiveGeometric3D } from './components/InteractiveGeometric3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { SpeedGuarantee } from './components/SpeedGuarantee';
import { PricingPackages } from './components/PricingPackages';
import { RazorpayBookingSection, RazorpayCheckoutModal } from './components/RazorpayBookingSection';
import { BlogsInsightsSection } from './components/BlogsInsightsSection';
import { ContactDemoForm } from './components/ContactDemoForm';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { DemoRequestModal } from './components/DemoRequestModal';
import { LoginToExploreModal } from './components/LoginToExploreModal';
import { GeminiChatModal } from './components/GeminiChatModal';
import { PackageType, RegionalPackage, UnlockLeadInput } from './utils/pricingCalculator';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRazorpayModalOpen, setIsRazorpayModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  const [razorpayType, setRazorpayType] = useState<'deposit' | 'balance'>('deposit');
  const [activePkg, setActivePkg] = useState<RegionalPackage | undefined>(undefined);

  const [isDemosUnlocked, setIsDemosUnlocked] = useState(false);
  const [unlockedPass, setUnlockedPass] = useState<string | null>(null);
  const [targetDemoTitle, setTargetDemoTitle] = useState<string>('Apex 3D Emergency Plumbing');
  const [selectedPackage, setSelectedPackage] = useState<PackageType>('starter');
  const [selectedContext, setSelectedContext] = useState<string>('');

  const handleOpenDemoRequest = (context?: string) => {
    if (context) {
      setSelectedContext(context);
    }
    setIsDemoModalOpen(true);
  };

  const handleOpenLoginModal = (demoTitle?: string) => {
    if (demoTitle) {
      setTargetDemoTitle(demoTitle);
    }
    setIsLoginModalOpen(true);
  };

  const handleOpenRazorpayModal = (type: 'deposit' | 'balance' = 'deposit', pkg?: RegionalPackage) => {
    setRazorpayType(type);
    if (pkg) setActivePkg(pkg);
    setIsRazorpayModalOpen(true);
  };

  const handleSelectRegionalPackage = (pkg: RegionalPackage) => {
    if (pkg.id.includes('growth') || pkg.id.includes('multi')) {
      setSelectedPackage('growth');
    } else {
      setSelectedPackage('starter');
    }
    setSelectedContext(`Selected Offer: ${pkg.name} (${pkg.currencySymbol}${pkg.offerPrice} - ${pkg.depositModel})`);
    setIsDemoModalOpen(true);
  };

  const handleUnlockedSuccess = (pass: string, _lead: UnlockLeadInput) => {
    setUnlockedPass(pass);
    setIsDemosUnlocked(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] selection:bg-indigo-500 selection:text-white relative">
      {/* 3D Floating Geometric Objects in Bright Light-Mode */}
      <InteractiveGeometric3D />

      {/* Top Navbar */}
      <Navbar
        onOpenDemoRequest={() => handleOpenDemoRequest()}
        onOpenRazorpayModal={(t) => handleOpenRazorpayModal(t)}
        onOpenChat={() => setIsChatModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero & Trust Bar */}
        <Hero
          onOpenDemoRequest={() => handleOpenDemoRequest()}
          onOpenLoginModal={() => handleOpenLoginModal()}
          onOpenRazorpayModal={(t) => handleOpenRazorpayModal(t)}
        />

        {/* 2. About Us Section (Founder BCA Story, Global Mission, Core Values) */}
        <AboutUsSection />

        {/* 3. Why Choose Us Section (5 Grid Feature Cards with 3D Tilt Hover Effects) */}
        <WhyChooseUsSection />

        {/* 4. Services Offered (4 Core Cards) */}
        <ServicesSection onOpenDemoRequest={(title) => handleOpenDemoRequest(title)} />

        {/* 5. Gated Login & Lead-Capture Portal (3 Interactive Demos) */}
        <PortfolioGrid
          onOpenDemoRequest={(title) => handleOpenDemoRequest(title)}
          onOpenLoginModal={(title) => handleOpenLoginModal(title)}
          isUnlocked={isDemosUnlocked}
          unlockedPass={unlockedPass}
        />

        {/* 6. Speed & 48-Hour Delivery Guarantee */}
        <SpeedGuarantee />

        {/* 7. Dual Regional Pricing & Packages (USD $350 vs INR ₹7,999 with 50/50 Terms) */}
        <PricingPackages
          onSelectRegionalPackage={handleSelectRegionalPackage}
          onOpenRazorpayModal={handleOpenRazorpayModal}
        />

        {/* 8. Dedicated Razorpay 50/50 Payment Integration */}
        <RazorpayBookingSection
          onOpenModal={(t, _c) => handleOpenRazorpayModal(t)}
        />

        {/* 9. Blogs & Insights Section (3 Authority Articles with Read Full Article Modal) */}
        <BlogsInsightsSection
          onOpenDemoRequest={(ctx) => handleOpenDemoRequest(ctx)}
        />

        {/* 10. Automated Email Notifications & Demo Booking Form */}
        <ContactDemoForm initialPackage={selectedPackage} initialService={selectedContext} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Mobile Bottom Bar */}
      <MobileBottomBar
        onOpenDemoRequest={() => handleOpenDemoRequest()}
        onOpenRazorpayModal={() => handleOpenRazorpayModal('deposit')}
        onOpenChat={() => setIsChatModalOpen(true)}
      />

      {/* Interactive Free Demo Request Modal */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        selectedPackage={selectedPackage}
        selectedContext={selectedContext}
        onOpenRazorpayModal={handleOpenRazorpayModal}
      />

      {/* "Register / Log In to Explore Live 3D Demos" Lead Capture Modal */}
      <LoginToExploreModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onUnlockedSuccess={handleUnlockedSuccess}
        targetDemoTitle={targetDemoTitle}
      />

      {/* Razorpay Instant Checkout Modal */}
      <RazorpayCheckoutModal
        isOpen={isRazorpayModalOpen}
        onClose={() => setIsRazorpayModalOpen(false)}
        defaultType={razorpayType}
        selectedPkg={activePkg}
      />

      {/* Vertex AI Strategist Gemini Chatbot Modal */}
      <GeminiChatModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
        onOpenRazorpayModal={handleOpenRazorpayModal}
      />
    </div>
  );
}
