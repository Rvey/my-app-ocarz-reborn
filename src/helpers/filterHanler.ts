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

export const calculateAmountOfFilters = (filters: any) => {
  let amount = 0;
  for (const key in filters) {
    if (filters[key] !== null) {
      amount++;
    }
  }
  return amount;
}
let url = "https://fakestoreapi.com/products?brand=2&price[gte]=10&price[lte]=20&limit=5&sort=desc";

// get the filters from the url
const getFilters = (url: string) => {
  let filters: any = {};
  const urlParts = url.split("?")[1].split("&");
  urlParts.forEach((part) => {
    const [key, value] = part.split("=");
    filters[key] = value;
  });
  return filters;
}

let filters = getFilters(url);

calculateAmountOfFilters(filters); // 5

