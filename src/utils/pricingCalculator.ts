export type CurrencyType = 'USD' | 'INR';

export type PackageType = 'starter' | 'growth' | 'enterprise';

export interface PackageConfigItem {
  id: PackageType;
  name: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  turnaroundHours: number;
  description: string;
  features: string[];
}

export const PACKAGES_CONFIG: Record<PackageType, PackageConfigItem> = {
  starter: {
    id: 'starter',
    name: 'Turnkey 3D Business Website ($350 / ₹7,999)',
    price: 350,
    originalPrice: 1550,
    discountPercent: 77,
    turnaroundHours: 48,
    description: 'Single-page custom 3D web design, mobile-first optimization, click-to-call setup, 48-hour delivery, 50/50 payment.',
    features: [
      'Single-page 3D responsive design',
      'Mobile-first layout & sticky click-to-call bar',
      'Guaranteed 48-hour turnaround',
      '50/50 Payment ($175 Upfront Deposit / $175 Final Balance)',
      'Free DNS, domain, and server migration'
    ]
  },
  growth: {
    id: 'growth',
    name: '3D Growth Funnel ($650 / ₹14,999)',
    price: 650,
    originalPrice: 2450,
    discountPercent: 73,
    turnaroundHours: 72,
    description: 'Multi-page architecture, custom booking integration, full SEO setup, Before/After comparison slider.',
    features: [
      'Multi-page design (Home + Services + Booking)',
      'Interactive Before/After slider & instant quote calculator',
      'Full technical SEO & schema markup',
      'Direct WhatsApp concierge integration'
    ]
  },
  enterprise: {
    id: 'enterprise',
    name: 'Custom 3D Web Application ($1,250)',
    price: 1250,
    originalPrice: 3800,
    discountPercent: 67,
    turnaroundHours: 120,
    description: 'Full custom 3D interactive web portal, client dashboard, CRM lead routing & 1-year hosting.',
    features: [
      'Custom 3D isometric interactive models',
      'Full CRM & automated dispatch integration',
      'Priority 24/7 dedicated developer channel',
      '1 Year of managed high-speed cloud hosting'
    ]
  }
};

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validateInternationalPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export function generateDemoId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `VTX-${rand}`;
}

export function calculateProjectPrice(options: { packageType: PackageType; includeHosting: boolean }): {
  basePrice: number;
  hostingPrice: number;
  totalFirstYear: number;
  depositAmount: number;
} {
  const basePrice = PACKAGES_CONFIG[options.packageType].price;
  const hostingPrice = options.includeHosting ? 35 * 12 : 0;
  const totalFirstYear = basePrice + hostingPrice;
  const depositAmount = Math.round(basePrice * 0.5);

  return {
    basePrice,
    hostingPrice,
    totalFirstYear,
    depositAmount
  };
}

export interface RegionalPackage {
  id: string;
  name: string;
  currency: CurrencyType;
  currencySymbol: string;
  originalPrice: number;
  offerPrice: number;
  discountPercent: number;
  tagline: string;
  termsSummary: string;
  turnaroundHours: number;
  step1Deposit: number;
  step2Balance: number;
  step1Description: string;
  step2Description: string;
  features: string[];
  depositModel: string;
  badge?: string;
  popular?: boolean;
}

export const DUAL_REGIONAL_PACKAGES: Record<CurrencyType, RegionalPackage[]> = {
  USD: [
    {
      id: 'usd-turnkey-3d',
      name: 'Turnkey 3D Business Website',
      currency: 'USD',
      currencySymbol: '$',
      originalPrice: 1550,
      offerPrice: 350,
      discountPercent: 77,
      tagline: '77% OFF Limited Founder Offer • Built for High-Converting International Service Brands',
      termsSummary: '$175 Upfront Deposit / $175 Final Balance. 48-Hour Delivery.',
      turnaroundHours: 48,
      step1Deposit: 175,
      step2Balance: 175,
      step1Description: 'Pay 50% Upfront Deposit ($175) to start design & reserve 48h launch slot.',
      step2Description: 'Pay 50% Final Balance ($175) ONLY after reviewing and approving the finished website.',
      depositModel: '$175 Upfront Deposit / $175 Final Balance. 48-Hour Delivery.',
      popular: true,
      badge: '77% OFF LIMITED FOUNDER OFFER',
      features: [
        'Single-page custom 3D & light-mode glassmorphic design',
        'Instant click-to-call mobile buttons & sticky action bar',
        'Guaranteed 48-hour delivery timeline',
        'Complete domain DNS, SSL & cloud hosting setup',
        '50/50 Razorpay Model: $175 Upfront Deposit / $175 Final Balance',
        'Automated dual email notifications & live preview link'
      ]
    },
    {
      id: 'usd-growth-funnel',
      name: 'Growth Multi-Page System',
      currency: 'USD',
      currencySymbol: '$',
      originalPrice: 2450,
      offerPrice: 650,
      discountPercent: 73,
      tagline: 'Complete 3D Conversion Funnel for Established Brands',
      termsSummary: '$325 Upfront Deposit / $325 Final Balance. 72-Hour Delivery.',
      turnaroundHours: 72,
      step1Deposit: 325,
      step2Balance: 325,
      step1Description: 'Pay 50% Upfront Deposit ($325) to commence multi-page architecture.',
      step2Description: 'Pay 50% Final Balance ($325) upon final review & live domain handover.',
      depositModel: '$325 Upfront Deposit / $325 Final Balance. 72-Hour Delivery.',
      badge: 'FULL FUNNEL',
      features: [
        'Up to 4 custom 3D responsive pages & service silos',
        'Interactive Before/After visual comparison slider',
        'Custom appointment booking & instant quote calculator',
        'Advanced technical SEO, schema markup & fast CDN',
        'Direct WhatsApp floating widget integration',
        '1 Month of complimentary managed cloud hosting'
      ]
    }
  ],
  INR: [
    {
      id: 'inr-local-growth',
      name: 'Local Business Growth Site',
      currency: 'INR',
      currencySymbol: '₹',
      originalPrice: 24999,
      offerPrice: 7999,
      discountPercent: 68,
      tagline: '68% OFF Small Business Special • Fast Local Service Launch',
      termsSummary: '₹3,999 Upfront Deposit / ₹4,000 Final Balance. Fast 48-Hour Launch.',
      turnaroundHours: 48,
      step1Deposit: 3999,
      step2Balance: 4000,
      step1Description: 'Pay 50% Upfront Deposit (₹3,999) to begin setup & reserve slot.',
      step2Description: 'Pay 50% Final Balance (₹4,000) upon final website delivery & domain transfer.',
      depositModel: '₹3,999 Upfront Deposit / ₹4,000 Final Balance. Fast 48-Hour Launch.',
      popular: true,
      badge: '68% OFF SMALL BUSINESS SPECIAL',
      features: [
        'Clean, ultra-fast 3D glassmorphic responsive layout',
        'Direct 1-tap WhatsApp chat & click-to-call integration',
        'Google Business Profile & Google Maps location embed',
        'Fast 48-hour launch with full mobile speed optimization',
        '50/50 Model: ₹3,999 Upfront Deposit / ₹4,000 Final Balance',
        'Free domain connection & lifetime SSL certificate'
      ]
    },
    {
      id: 'inr-pro-business',
      name: 'Pro Multi-Service Suite',
      currency: 'INR',
      currencySymbol: '₹',
      originalPrice: 45000,
      offerPrice: 14999,
      discountPercent: 67,
      tagline: 'Multi-Page Authority Website with Lead Funnel',
      termsSummary: '₹7,499 Upfront Deposit / ₹7,500 Final Balance. 72-Hour Launch.',
      turnaroundHours: 72,
      step1Deposit: 7499,
      step2Balance: 7500,
      step1Description: 'Pay 50% Upfront Deposit (₹7,499) to begin full multi-page development.',
      step2Description: 'Pay 50% Final Balance (₹7,500) on final review & live handover.',
      depositModel: '₹7,499 Upfront Deposit / ₹7,500 Final Balance. 72-Hour Launch.',
      badge: 'POPULAR IN INDIA',
      features: [
        'Multi-page architecture (Home, Services, Gallery, Contact)',
        'Interactive Before/After photo comparison slider',
        'Custom lead capture form with WhatsApp instant alerts',
        'Local SEO optimization for high Google Maps ranking',
        'QR code generator for on-site client reviews',
        '1 Year of managed high-speed hosting included'
      ]
    }
  ]
};

export interface UnlockLeadInput {
  fullName: string;
  email: string;
  businessNameOrCity: string;
  phoneNumber: string;
}

export function validateUnlockLead(input: UnlockLeadInput): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  if (!input.fullName.trim()) errors.fullName = 'Please enter your full name';
  if (!input.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email.trim())) {
    errors.email = 'Please provide a valid email';
  }
  if (!input.businessNameOrCity.trim()) {
    errors.businessNameOrCity = 'Please enter your business name & industry';
  }
  const digits = input.phoneNumber.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) {
    errors.phoneNumber = 'Please provide a valid phone or WhatsApp number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function generateAccessPass(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let rand = '';
  for (let i = 0; i < 4; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `VTX-PASS-${rand}`;
}

export function formatPrice(amount: number, currency: CurrencyType): string {
  if (currency === 'INR') {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}

export interface DualNotificationPayload {
  agencyAlert: {
    to: string;
    subject: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    businessName: string;
    requestedPackage: string;
  };
  clientAutoResponder: {
    to: string;
    subject: string;
    message: string;
  };
}

export function buildDualNotifications(input: {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  requestedPackage?: string;
}): DualNotificationPayload {
  const cleanName = input.name.trim() || 'Valued Client';
  const cleanBusiness = input.businessName.trim() || 'Your Business';
  const pkg = input.requestedPackage?.trim() || 'Turnkey 3D Website ($350 / ₹7,999)';

  return {
    agencyAlert: {
      to: 'websiteseller6277@gmail.com',
      subject: `[Vertex 3D Lead Alert] New Booking from ${cleanName} (${cleanBusiness})`,
      clientName: cleanName,
      clientEmail: input.email.trim(),
      clientPhone: input.phone.trim(),
      businessName: cleanBusiness,
      requestedPackage: pkg
    },
    clientAutoResponder: {
      to: input.email.trim(),
      subject: `Order Received: Your 48-Hour 3D Demo Link for ${cleanBusiness}`,
      message: `Hi ${cleanName}, thank you for booking with Vertex 3D Web Studio! We received your order and will send your demo link within 24–48 hours.`
    }
  };
}
