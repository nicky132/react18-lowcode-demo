import { devConfig } from './dev';
import { prodConfig } from './prod';

const env = process.env.NODE_ENV;

const getConfig = () => {
  if (env === 'dev') {
    return devConfig;
  }
  return prodConfig;
};

export const config = getConfig();
