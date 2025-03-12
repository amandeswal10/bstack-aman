export const config = {
  username: process.env.BROWSERSTACK_USERNAME,
  accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      { browserstackLocal: true, opts: { forceLocal: false } },
    ],
  ],
  // add path to the test file
  specs: ['./tests/**/*.spec.js'],
  capabilities: [
    {
      browserName: 'Chrome',
      'bstack:options': {
        browserVersion: '120.0',
        os: 'Windows',
        osVersion: '10'
      }
    },
    {
      browserName: 'Firefox',
      'bstack:options': {
        browserVersion: '135.0',
        os: 'OS X',
        osVersion: 'Ventura'
      }
    },
    {
      browserName: 'chrome',
      'bstack:options': {
        deviceOrientation: 'portrait',
        deviceName: 'Samsung Galaxy S22',
        osVersion: '12.0'
      }
    }
  ],
  commonCapabilities: {
    'bstack:options': {
      buildName: "bstack-tech-challenge",
      buildIdentifier: "${BUILD_NUMBER}",
      projectName: "BrowserStack TechChallenge",
      networkLogs: "true",
      consoleLogs: "info",
      networkLogs: true,
      userName: username,
      accessKey : accessKey,
    }
  },
  mochaOpts: {
    timeout: 60000,
  }
  // rest of your config goes here...
};
config.capabilities.forEach(function (caps) {
  for (let i in config.commonCapabilities)
    caps[i] = { ...caps[i], ...config.commonCapabilities[i]};
});