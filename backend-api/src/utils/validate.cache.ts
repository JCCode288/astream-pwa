export default (cacheItem) => {
  if (typeof cacheItem !== 'object') {
    return false;
  }

  return true;
};
