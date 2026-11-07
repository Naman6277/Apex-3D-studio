export type ServiceType = 'emergency-repair' | 'full-install' | 'inspection' | 'maintenance';
export type UrgencyType = 'emergency' | 'same-day' | 'scheduled';
export type PropertyType = 'residential' | 'commercial';

export interface ServiceDetail {
  id: ServiceType;
  title: string;
  tagline: string;
  baseMin: number;
  baseMax: number;
  estimatedDuration: string;
  defaultTimeframe: string;
}

export const SERVICES_CONFIG: Record<ServiceType, ServiceDetail> = {
  'emergency-repair': {
    id: 'emergency-repair',
    title: 'Emergency 24/7 Leak & Burst Repair',
    tagline: 'High-speed containment & permanent repair',
    baseMin: 180,
    baseMax: 350,
    estimatedDuration: '1 - 2 hours',
    defaultTimeframe: 'Immediate Dispatch (~25-30 min)'
  },
  'full-install': {
    id: 'full-install',
    title: 'Precision 3D HVAC & Tankless Installation',
    tagline: 'Next-gen energy-efficient climate systems',
    baseMin: 2200,
    baseMax: 4800,
    estimatedDuration: '4 - 8 hours',
    defaultTimeframe: 'Next Available Technician'
  },
  'inspection': {
    id: 'inspection',
    title: '3D Laser & Endoscopic Thermal Scan',
    tagline: 'Non-invasive acoustic & infrared diagnostic',
    baseMin: 99,
    baseMax: 149,
    estimatedDuration: '45 - 60 mins',
    defaultTimeframe: 'Flexible Morning/Afternoon'
  },
  'maintenance': {
    id: 'maintenance',
    title: 'Preventive Multi-Point System Tune-Up',
    tagline: '42-point pressure, electrical & chemical check',
    baseMin: 129,
    baseMax: 199,
    estimatedDuration: '1.5 hours',
    defaultTimeframe: 'Scheduled Window'
  }
};

export interface QuoteInput {
  service: ServiceType;
  urgency: UrgencyType;
  property: PropertyType;
}

export interface QuoteEstimate {
  minPrice: number;
  maxPrice: number;
  formattedRange: string;
  dispatchArrivalNote: string;
  waiverNote?: string;
}

export function calculateQuoteEstimate(input: QuoteInput): QuoteEstimate {
  const service = SERVICES_CONFIG[input.service] || SERVICES_CONFIG['emergency-repair'];
  
  let multiplier = 1.0;
  if (input.property === 'commercial') {
    multiplier *= 1.3;
  }
  
  if (input.urgency === 'scheduled') {
    multiplier *= 0.95; // 5% discount for advance scheduling
  }

  const minPrice = Math.round(service.baseMin * multiplier);
  const maxPrice = Math.round(service.baseMax * multiplier);

  let dispatchArrivalNote = 'Guaranteed 30-minute emergency arrival across metropolitan service area';
  if (input.urgency === 'same-day') {
    dispatchArrivalNote = 'Same-day technician assigned within a 2-hour arrival window';
  } else if (input.urgency === 'scheduled') {
    dispatchArrivalNote = 'Reserved priority slot with 30-minute advance text notice';
  }

  const waiverNote = input.service === 'inspection' 
    ? 'Diagnostic fee credited 100% toward any subsequent repairs'
    : 'Guaranteed upfront pricing with zero hidden after-hours fees';

  return {
    minPrice,
    maxPrice,
    formattedRange: `$${minPrice} - $${maxPrice}`,
    dispatchArrivalNote,
    waiverNote
  };
}

export function validatePhoneNumber(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 10 || (cleaned.length === 11 && cleaned.startsWith('1'));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  return phone;
}

export function validatePostalCode(zip: string): boolean {
  if (!zip) return false;
  return /^\d{5}(-\d{4})?$/.test(zip.trim());
}

export function generateDispatchId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'APX-';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
