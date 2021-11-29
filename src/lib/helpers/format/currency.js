/* eslint no-extend-native: ["error", { "exceptions": ["Number"] }] */
Number.prototype.currency = function (decimals = 0) {
  const thousand = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "USD",
  });

  return thousand.format(this);
};
