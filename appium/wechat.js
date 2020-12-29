const logger = require('../utils/logger');
const wd = require('wd');
const androidOptions = require('./caps').androidOptions;
const cronJob = require("cron").CronJob;

function wechatStart() {
  new cronJob('0 0 8 * * *', function () { //0 0 8 * * *
    remote();
    logger.info('每日启动微信定时任务启动' + new Date().toLocaleString());
  }, null, true);
}
async function jumpToPosts(){
  logger.info('androidOptions ' + JSON.stringify(androidOptions.serverConfig));
  let driver = await wd.promiseChainRemote(androidOptions.serverConfig);
  let desiredCaps = androidOptions.capabilities;
  await driver.init(desiredCaps);
  await driver.setImplicitWaitTimeout(6000);
  await sleep(20000);
  // 点击
  let avatar = await driver.element("xpath",".//android.widget.RelativeLayout[2]");//com.tencent.mm:id/d3r
  await avatar.click();
  console.log("单击avatar "+avatar);
  let subscription = await driver.elementById("com.tencent.mm:id/a50");
  await subscription.click();
  console.log("单击subscriptiont "+subscription);
  let firstChildSub = await driver.elementById("com.tencent.mm:id/a8s");
  await firstChildSub.click();
  console.log("单击firstChildSub "+firstChildSub);
  await sleep(20000);
  let subMenu = await driver.elementById("com.tencent.mm:id/jr");
  await subMenu.click();
  console.log("单击subMenu "+subMenu);
  await sleep(20000);
  let allArticles = await driver.element("xpath",".//android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]");
  await allArticles.click();
  console.log("单击allArticles "+allArticles);
  await sleep(20000);
  let subMenu2 = await driver.elementById("com.tencent.mm:id/jr");
  await subMenu2.click();
  let refresh = await driver.element("xpath",".//android.support.v7.widget.RecyclerView/android.widget.LinearLayout[9]");
  await refresh.click();
  console.log("Posts page refresh");
  //driver.refresh();
}

async function remote(){
  logger.info('androidOptions ' + JSON.stringify(androidOptions.serverConfig));
  let driver = await wd.promiseChainRemote(androidOptions.serverConfig);
  let desiredCaps = androidOptions.capabilities;
  await driver.init(desiredCaps);
  await driver.setImplicitWaitTimeout(6000);
  await sleep(20000);
  // 点击
  let avatar = await driver.element("xpath",".//android.widget.RelativeLayout[2]");//com.tencent.mm:id/d3r
  await avatar.click();
  console.log("单击avatar "+avatar);
  let subscription = await driver.elementById("com.tencent.mm:id/a50");
  await subscription.click();
  console.log("单击subscriptiont "+subscription);
  let firstChildSub = await driver.elementById("com.tencent.mm:id/a8s");
  await firstChildSub.click();
  console.log("单击firstChildSub "+firstChildSub);
  await sleep(20000);
  let subMenu = await driver.elementById("com.tencent.mm:id/jr");
  await subMenu.click();
  console.log("单击subMenu "+subMenu);
  await sleep(20000);
  let allArticles = await driver.elementById("com.tencent.mm:id/azu");
  await allArticles.click();
  console.log("单击allArticles "+allArticles);
  // 填写账号
  //let phone = await driver.elementById("video.like:id/et_phone");
  //await phone.sendKeys("137XXXXXXX");
  logger.info('每日启动微信成功' + new Date().toLocaleString());
}
function sleep(numbermsec){
  let now = new Date().getTime();
  let desc = now + numbermsec;
  while( now<desc ){
    now = new Date().getTime();
  }
}
exports.wechatStart = wechatStart;
exports.jumpToPosts = jumpToPosts;

