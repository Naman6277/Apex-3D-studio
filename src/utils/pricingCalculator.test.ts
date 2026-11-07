import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DUAL_REGIONAL_PACKAGES,
  validateUnlockLead,
  generateAccessPass,
  formatPrice,
  buildDualNotifications
} from './pricingCalculator';

test('USD regional package includes Turnkey 3D Business Website with 50/50 payment terms', () => {
  const usdPackages = DUAL_REGIONAL_PACKAGES.USD;
  const turnkey = usdPackages.find(p => p.id === 'usd-turnkey-3d');
  assert.ok(turnkey);
  assert.equal(turnkey.originalPrice, 1550);
  assert.equal(turnkey.offerPrice, 350);
  assert.equal(turnkey.discountPercent, 77);
  assert.equal(turnkey.step1Deposit, 175);
  assert.equal(turnkey.step2Balance, 175);
  assert.match(turnkey.termsSummary, /\$175 Upfront Deposit \/ \$175 Final Balance\. 48-Hour Delivery\./);
});

test('INR regional package includes Local Business Growth Site with 50/50 payment terms', () => {
  const inrPackages = DUAL_REGIONAL_PACKAGES.INR;
  const localGrowth = inrPackages.find(p => p.id === 'inr-local-growth');
  assert.ok(localGrowth);
  assert.equal(localGrowth.originalPrice, 24999);
  assert.equal(localGrowth.offerPrice, 7999);
  assert.equal(localGrowth.discountPercent, 68);
  assert.equal(localGrowth.step1Deposit, 3999);
  assert.equal(localGrowth.step2Balance, 4000);
  assert.match(localGrowth.termsSummary, /₹3,999 Upfront Deposit \/ ₹4,000 Final Balance\. Fast 48-Hour Launch\./);
});

test('validateUnlockLead requires all 4 fields (Full Name, Email, Business/Industry, Phone/WhatsApp)', () => {
  const valid = validateUnlockLead({
    fullName: 'Rajesh Sharma',
    email: 'rajesh@growthsolar.in',
    businessNameOrCity: 'Sharma Solar & Electricals, Mumbai',
    phoneNumber: '+91 8084272027'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);

  const invalid = validateUnlockLead({
    fullName: '',
    email: 'bad-email',
    businessNameOrCity: '',
    phoneNumber: '12'
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.businessNameOrCity);
  assert.ok(invalid.errors.phoneNumber);
});

test('formatPrice formats USD and INR correctly', () => {
  assert.equal(formatPrice(350, 'USD'), '$350');
  assert.equal(formatPrice(1550, 'USD'), '$1,550');
  assert.equal(formatPrice(7999, 'INR'), '₹7,999');
  assert.equal(formatPrice(24999, 'INR'), '₹24,999');
});

test('generateAccessPass returns VTX-PASS prefix', () => {
  const pass = generateAccessPass();
  assert.match(pass, /^VTX-PASS-[A-Z0-9]{4}$/);
});

test('buildDualNotifications constructs exact Agency Alert and Client Auto-Responder messages', () => {
  const result = buildDualNotifications({
    name: 'Alexander Vance',
    email: 'alex@apexroofing.com',
    phone: '+1 555 234 5678',
    businessName: 'Apex Roofing & Solar',
    requestedPackage: 'Turnkey 3D Business Website ($350)'
  });

  assert.equal(result.agencyAlert.to, 'websiteseller6277@gmail.com');
  assert.equal(result.agencyAlert.clientName, 'Alexander Vance');
  assert.equal(result.agencyAlert.businessName, 'Apex Roofing & Solar');
  assert.equal(
    result.clientAutoResponder.message,
    'Hi Alexander Vance, thank you for booking with Vertex 3D Web Studio! We received your order and will send your demo link within 24–48 hours.'
  );
});
