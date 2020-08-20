const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.resolve.extensions.push('.tsx');
  config.module.rules.push({
    test: /\.(tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript'
      ]
    }
  });

  //add aliases
  config.resolve.alias = {
      '@abgov/shared/storybook-common': path.resolve(__dirname, '../libs/shared/storybook-common/src/index.ts'),
      '@abgov/shared/common': path.resolve(__dirname, '../libs/shared/common/src/index.ts')    
  }

  // Return the altered config
  return config;
};
