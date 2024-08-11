const fetcher = async (...args: Parameters<typeof fetch>) => {
  const [input, init] = args;
  return fetch(input, init).then((res) => res.json());
};

export default fetcher;
