export const checkFilter = (filter: string | null, key: string) => {
  if (filter) {
    return `&${key}=${filter}`;
  } else {
    return "";
  }
};

export const checkPriceFilter = (min: number, max: number) => {
  if (min !== 0 && max !== 0) {
    return `&price[gte]=${min}&price[lte]=${max}`;
  } else if (min !== 0) {
    return `&price[gte]=${min}`;
  } else if (max !== 0) {
    return `&price[lte]=${max}`;
  } else {
    return "";
  }
};
