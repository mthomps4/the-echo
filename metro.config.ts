import { getDefaultConfig } from '@expo/metro-config';

const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.resolver.sourceExts.push('cjs');

module.exports = defaultConfig;

// import { getDefaultConfig } from 'metro-config';
// const { resolver: defaultResolver } = getDefaultConfig.getDefaultValues();

// module.exports = {
//   ...defaultResolver,
//   sourceExts: [...defaultResolver.sourceExts, 'cjs'],
// };

// const defaultSourceExts = require('metro-config/src/defaults/defaults').sourceExts;

// module.exports = {
//   transformer: {
//     getTransformOptions: () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
//   resolver: {
//     sourceExts: process.env.RN_SRC_EXT
//       ? [...process.env.RN_SRC_EXT.split(',').concat(defaultSourceExts), 'cjs'] // <-- cjs added here
//       : [...defaultSourceExts, 'cjs'], // <-- cjs added here
//   },
// };
