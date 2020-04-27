import Constants from 'expo-constants';

const ENV = {
  dev: {
    API_KEY: 9973533
  },
  staging: {
    API_KEY: 9973533
  },
  prod: {
    API_KEY: 9973533
  }
};

function getEnvVars(env = "") {
  if (env === null || env === undefined || env === "") return ENV.dev;
  if (env.indexOf("dev") !== -1) return ENV.dev;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("prod") !== -1) return ENV.prod;
}

export default getEnvVars(Constants.manifest.releaseChannel);