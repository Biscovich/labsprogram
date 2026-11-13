'use strict';

function compose(...fns) {
  const handlers = [];
  const run = (value) => {
    let result = value;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
      for (const handler of handlers) handler(error);
      return undefined;
    }
  };
  run.on = (event, handler) => {
    if (event === 'error') handlers.push(handler);
    return run;
  };
  return run;
}

module.exports = { compose };
