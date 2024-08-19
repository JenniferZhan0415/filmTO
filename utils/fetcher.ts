const fetcher = async (...args: Parameters<typeof fetch>) => {
  const [input, init] = args;

  return fetch(input, init).then((res) => res.json());
};

export const textFetcher = async (...args: Parameters<typeof fetch>) => {
  const [input, init] = args;

  return fetch(input, init).then((res) => res.text());
};

export default fetcher;
