const trackPerformance = (callback) => {

  if (typeof callback !== 'function') return;

  const loadMetrics = async () => {
    const metrics = await import('web-vitals');

    const { getCLS, getFID, getFCP, getLCP, getTTFB } = metrics;

    getCLS(callback);
    getFID(callback);
    getFCP(callback);
    getLCP(callback);
    getTTFB(callback);
  };

  loadMetrics();
};

export default trackPerformance;
