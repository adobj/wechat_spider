### 1、下载nssm.exe
官网：http://nssm.cc/download
### 2、解压至本地目录
根据操作系统选择32位或64位nssm，在该目录启动命令行窗口，或cd /d path
### 3、服务注册（以注册ngrok为例）
命令行输入：
nssm.exe install WechatSpider
接下来会弹出一个框，在Path 中选择NodeJs安装环境的node.exe，Startup directory 选择你的NodeJs应用的目录，Argument输入你的启动文件，例如在我桌面上运行index.js （在Startup directory目录执行node index.js ），点击Install service即可
### 4、服务启动
nssm.exe start WechatSpider
启动后，你将在本地计算机服务列表看到WechatSpider服务。Win+R，services.msc。

### 其他设置命令：
nssm start <servicename>
nssm stop <servicename>
nssm restart <servicename>

### 5、服务卸载
nssm remove WechatSpider

***无头启动appium服务***
```
C:\Program Files\Appium\resources\app\node_modules\appium\build\lib>node main.js -a 127.0.0.1 -p 4723 --bootstrap-port 4780 --session-override
```
