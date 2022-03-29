const techList = (tecs, name) => {
  if(tecs.length === 0) return 'Vazio!'
  const result = tecs.sort().map((map) => ({ tech: map, name }));
  return result;
}

module.exports = techList;
