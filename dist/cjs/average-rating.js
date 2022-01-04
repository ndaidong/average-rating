// average-rating@2.0.1, by @ndaidong - built with esbuild at 2022-01-04T03:58:54.537Z - published under MIT license
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/main.js
var main_exports = {};
__export(main_exports, {
  average: () => average,
  rate: () => rate,
  score: () => score
});
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
module.exports = __toCommonJS(main_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  average,
  rate,
  score
});
