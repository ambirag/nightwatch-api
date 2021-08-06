const seleniumServer = require('selenium-webdriver');
const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');

module.exports = {
  test_settings: {
    default: {
      selenium: process.env.containerized
        ? {
            port: 443,
            host: `${process.env.gridhost}`,
            use_ssl : true
          }
        : {
            port: 443,
            start_process: false,
            server_path: seleniumServer.path,
            host: `${process.env.gridhost}`,
            cli_args: {
              'webdriver.chrome.driver': chromeDriver.path,
              'webdriver.gecko.driver': geckoDriver.path,
            }
          }
    },
    chromeHeadless: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          args: ['--headless']
        }
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          "args": [
            "--load-extension=/User/ra.replay-poc/tree/main/BrowserExtensions/recorder",
          ]
        }
      }
    },
    chrome_4444: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false,
          "args": [
            "--load-extension=/User/ra.replay-poc/tree/main/BrowserExtensions/recorder",
          ]
        }
      }
    },
    opera: {
      desiredCapabilities: {
        browserName: 'opera',
        'goog:chromeOptions': {
          w3c: false
        }
      }
    },
    edge: {
      desiredCapabilities: {
        browserName: "MicrosoftEdge",
        platformName: "LINUX",
        w3c: "true"
      }
    },
    firefox: {
      desiredCapabilities: {
        "moz:firefoxOptions": {
          "binary": "/opt/firefox-latest/firefox",
        },
        "log": {"level": "trace"},
        browserName: 'firefox',
        platformName: "LINUX",
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      }
    },
    android : {
      desiredCapabilities: {
        browserName: 'chrome',
        platformName: "ANDROID",
        adbExecTimeout: '90000',
        ignoreHiddenApiPolicyError: 'true',
        'goog:chromeOptions': {
          w3c: false,
          androidPackage: "com.android.chrome",
          args: ["--disable-web-security", "--no-first-run"]
          }
      }
    }
  }
};
