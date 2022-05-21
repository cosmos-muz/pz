import { calculateCost, calculateCostPerGram } from './cheeseService';

test('calculateCost should return total cost', () => {
  expect(calculateCost(2, 0.3)).toBe(0.6);
  expect(calculateCost(10, 2)).toBe(20);
});

test('calculateCost should return 2 digits precision', () => {
  const cost = calculateCost(9, 78.43);

  expect(cost).toBe(705.87);
  expect(cost).toBeCloseTo(705.87, 2);
});

test('calculateCostPerGram should return total cost', () => {
    expect(calculateCostPerGram(500)).toBe(0.5);
    expect(calculateCostPerGram(30)).toBe(0.03);
  });
  

test('calculateCostPerGram should return cost in grams for a given value upto 2 digits precision', () => {
  const cost = calculateCostPerGram(200);

  expect(cost).toBe(0.2);
  expect(cost).toBeCloseTo(0.2, 2);
});
