export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (acc, item) => (...args) => item(acc(...args));

export const pipe = (...fns) => fns.reduce(_pipe);
