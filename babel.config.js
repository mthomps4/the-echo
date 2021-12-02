module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: 'dotenv',
          allowlist: ['BASE_API_URL'],
          path: '.env',
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
