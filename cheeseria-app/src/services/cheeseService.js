const Unit = {
  kg: 'kg',
  g: 'g',
};

const calculateCost = (qty, unitCost) => {
  return Number(Number(qty * unitCost).toFixed(2));
};

const calculateCostPerGram = (costPerKilo) => {
  return Number(costPerKilo / 1000);
};

export { Unit, calculateCost, calculateCostPerGram };
