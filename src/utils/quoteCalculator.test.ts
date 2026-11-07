import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateQuoteEstimate,
  validatePhoneNumber,
  formatPhoneNumber,
  validatePostalCode,
  generateDispatchId,
  SERVICES_CONFIG
} from './quoteCalculator';

test('calculateQuoteEstimate calculates residential emergency repair correctly', () => {
  const estimate = calculateQuoteEstimate({
    service: 'emergency-repair',
    urgency: 'emergency',
    property: 'residential'
  });
  assert.equal(estimate.minPrice, 180);
  assert.equal(estimate.maxPrice, 350);
  assert.equal(estimate.formattedRange, '$180 - $350');
  assert.match(estimate.dispatchArrivalNote, /30-minute/);
});

test('calculateQuoteEstimate applies commercial rate multiplier', () => {
  const estimate = calculateQuoteEstimate({
    service: 'emergency-repair',
    urgency: 'emergency',
    property: 'commercial'
  });
  // 180 * 1.3 = 234, 350 * 1.3 = 455
  assert.equal(estimate.minPrice, 234);
  assert.equal(estimate.maxPrice, 455);
});

test('calculateQuoteEstimate applies scheduled advance discount', () => {
  const estimate = calculateQuoteEstimate({
    service: 'maintenance',
    urgency: 'scheduled',
    property: 'residential'
  });
  // base is 129 * 0.95 = 123, 199 * 0.95 = 189
  assert.equal(estimate.minPrice, 123);
  assert.equal(estimate.maxPrice, 189);
});

test('validatePhoneNumber validates US phone numbers correctly', () => {
  assert.equal(validatePhoneNumber('5550192831'), true);
  assert.equal(validatePhoneNumber('(555) 019-2831'), true);
  assert.equal(validatePhoneNumber('1-555-019-2831'), true);
  assert.equal(validatePhoneNumber('123'), false);
  assert.equal(validatePhoneNumber(''), false);
});

test('formatPhoneNumber formats raw 10-digit input to readable format', () => {
  assert.equal(formatPhoneNumber('5550192831'), '(555) 019-2831');
});

test('validatePostalCode validates standard 5-digit and zip+4 codes', () => {
  assert.equal(validatePostalCode('90210'), true);
  assert.equal(validatePostalCode('90210-1234'), true);
  assert.equal(validatePostalCode('abcde'), false);
  assert.equal(validatePostalCode('1234'), false);
});

test('generateDispatchId generates valid APX prefix', () => {
  const id = generateDispatchId();
  assert.match(id, /^APX-[A-Z0-9]{4}$/);
});

test('all required services exist in config', () => {
  assert.ok(SERVICES_CONFIG['emergency-repair']);
  assert.ok(SERVICES_CONFIG['full-install']);
  assert.ok(SERVICES_CONFIG['inspection']);
  assert.ok(SERVICES_CONFIG['maintenance']);
});
