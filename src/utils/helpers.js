export const getUrlSearchParams = (key) => {
  const params = new URLSearchParams(location.search).get(key)?.split(',');
  return params;
};

export const setUrlSearchParams = (key, value, navigate, location) => {
  const params = new URLSearchParams(location.search);

  if (!isNotEmpty(value)) {
    params.delete(key);
    return;
  }

  params.set(key, (() => (Array.isArray(value) ? value.join(',') : value))());

  navigate({
    pathname: location.pathname,
    search: params.toString(),
  });
};

export const isNotEmpty = (params) => {
  if (Array.isArray(params) && params.length) return true;
  return params ? true : false;
};

export const createInitialFilterStateFromUrl = (initialState, key) => {
  const paramsValues = getUrlSearchParams(key);

  return Object.fromEntries(
    Object.entries(initialState).map(([key, value]) =>
      paramsValues?.includes(key) ? [key, true] : [key, value]
    )
  );
};
