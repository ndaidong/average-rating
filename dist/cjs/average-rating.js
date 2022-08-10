// average-rating@2.0.3, by @ndaidong - built with esbuild at 2022-08-10T15:12:36.260Z - published under MIT license
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.js
var main_exports = {};
__export(main_exports, {
  average: () => average,
  rate: () => rate,
  score: () => score
});
module.exports = __toCommonJS(main_exports);
var score = (p, n) => {
  if (p === 0 && n === 0) {
    return 0;
  }
  const r = ((p + 1.9208) / (p + n) - 1.96 * Math.sqrt(p * n / (p + n) + 0.9604) / (p + n)) / (1 + 3.8416 / (p + n));
  return Number(r.toFixed(2));
};
var rate = (rating) => {
  const size = rating.length;
  let n = rating[0];
  let p = rating[size - 1];
  const step = (1 / (size - 1)).toFixed(2);
  const totalStep = size - 1;
  for (let i = 1; i < totalStep; i++) {
    const ep = (step * i).toFixed(2);
    p += rating[i] * ep;
    n += rating[totalStep - i] * ep;
  }
  return score(p, n);
};
var average = (rating) => {
  const total = rating.reduce((prev, current) => {
    return prev + current;
  }, 0);
  if (total === 0) {
    return 0;
  }
  let sum = 0;
  let k = 1;
  rating.forEach((item) => {
    sum += item * k;
    k++;
  });
  const r = sum / total;
  return Number(r.toFixed(1));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  average,
  rate,
  score
});
