const hydrate = (bebidas) => {
  const resultado = bebidas.replace(/[^\d]/g, '')
    .split('')
    .reduce((acc, crr) => acc + Number(crr), 0);
  if (resultado === 1) return '1 copo de água';
  return `${resultado} copos de água`;
}

module.exports = hydrate;
