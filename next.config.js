/** @type {import('next').NextConfig} */
module.exports = () => {
  const reactStrictMode = true;

  const rewrites = () => {
    return [
      {
        source: '/:category/:subcategory/:vehicle/:submodel/:engine',
        destination: '/categories',
      },
    ];
  };

  return {
    reactStrictMode,
    rewrites,
  };
};
