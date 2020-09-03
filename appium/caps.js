
// Leave the Android platformVersion blank and set deviceName to a random string (Android deviceName is ignored by Appium but is still required)
// If we're using SauceLabs, set the Android deviceName and platformVersion to the latest supported SauceLabs device and version
const DEFAULT_ANDROID_DEVICE_NAME = process.env.SAUCE
  ? 'Android GoogleAPI Emulator'
  : 'My Android Device';
const DEFAULT_ANDROID_PLATFORM_VERSION = process.env.SAUCE ? '7.1' : null;

const androidCaps = {
    platformName: 'Android',
    automationName: 'UiAutomator2',
    deviceName: 'Samsung Galaxy S10 5G',
    platformVersion: '5.1.1',
    appPackage: 'com.tencent.mm',
    appActivity:'.ui.LauncherUI',
    newCommandTimeout: '43200',//服务端超时未收到指令将退出
    noReset:'true'//启动时是否清空app内容
};

const serverConfig = {
  path: '/wd/hub',
  host: process.env.APPIUM_HOST || 'localhost',
  port: process.env.APPIUM_PORT || 4723,
  logLevel: 'info'
};

const androidOptions = Object.assign(
    {
        capabilities: androidCaps
    },
    {
        serverConfig: serverConfig
    }
);

module.exports = {androidOptions};
