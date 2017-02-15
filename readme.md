# Nodejs 模拟登录新浪微博

## node版本

`node v7.5.0`, 使用了 `async/await` 语法


## 运行方法
由于 `async/await` 是ES7中的，所以运行时要加上`--harmony-async-await` 参数
```bash
git clone git@github.com:ruansongsong/nodejs-weibo-login.git
cd node-spider-of-weibo
npm install
node --harmony-async-await index.js
```

## 登录模块使用方法
```javascript
const weiboLogin = require('./lib/weibo_login.js').weiboLogin;
(async() => {
    await new weiboLogin('用户名', '密码2').init();
	/* 以下为你获取html的操作 */
	// 获取html示例，参见 index.js 中的 getHtml() 函数
    let result = await getHtml();
	// 输出
    console.log(result);

})()
```

## License
MIT