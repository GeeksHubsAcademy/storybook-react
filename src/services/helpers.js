export const cacheAsync = (fn) => {
  const cached = {};

  return async (...args) => {
    const key = args.join('-');

    if (cached[key] === undefined) {
      cached[key] = await fn(...args);
    }
    return cached[key];
  };
};

export const debounce = (fn, delay = 0) => {
  let id;
  return (...args) => {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(fn, delay, ...args);
    return id;
  };
};

export const roundDecimals = (value, decimals = 0) => {
  if (typeof value !== 'number') value = 0;
  return Number(value.toFixed(decimals));
};

export const parsePercent = (value) => {
  let newValue = value || 0;
  if (newValue < 0) newValue = 0;
  if (newValue > 1) newValue = 1;
  newValue = roundDecimals(newValue, 2);
  return newValue;
};

export const noAccents = (texto) => {
  const map = [
    ['\\s', ''],
    ['[àáâãäå]', 'a'],
    ['æ', 'ae'],
    ['ç', 'c'],
    ['[èéêë]', 'e'],
    ['[ìíîï]', 'i'],
    ['ñ', 'n'],
    ['[òóôõö]', 'o'],
    ['œ', 'oe'],
    ['[ùúûü]', 'u'],
    ['[ýÿ]', 'y'],
    ['\\W', ''],
  ];
  const cb = (match) => {
    if (match.toUpperCase() === match)
      return map[i][1].toUpperCase();
    return map[i][1];
  };
  for (var i = 0; i < map.length; ++i) {
    texto = texto.replace(new RegExp(map[i][0], 'gi'), cb);
  }
  return texto;
};
