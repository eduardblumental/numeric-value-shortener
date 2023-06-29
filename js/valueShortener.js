function shortening(value, desiredValueUnit) {
  const units = ["", "K", "M", "bn", "T"];
  const divisors = {"": 1, "K": 1e3, "M": 1e6, "bn": 1e9, "T": 1e12};

  if (value === null || value === undefined || isNaN(value)) {
      return { value, valueUnit: desiredValueUnit || "" };
  }

  if (units.includes(desiredValueUnit)) {
      if (value > 0) {
        return { value: value / divisors[desiredValueUnit], valueUnit: desiredValueUnit };
      }
  }

  if (desiredValueUnit === null || desiredValueUnit === undefined) {
      for (let unit of units.reverse()) {
          if (value >= divisors[unit]) {
              return { value: value / divisors[unit], valueUnit: unit };
          }
      }
  }

  return { value, valueUnit: desiredValueUnit || "" };
}

module.exports = { shortening };
