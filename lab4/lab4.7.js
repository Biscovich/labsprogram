'use strict';

const ages = (data) => {
  const out = {};
  for (const name in data) {
    if (!Object.hasOwn(data, name)) continue;
    const p = data[name];
    out[name] = p.died - p.born;
  }
  return out;
};

module.exports = { ages };
