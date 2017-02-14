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
	 let logined = new weiboLogin('用户名', '密码').init();
	 logined.then((result) => {
		if(result == 1) {
			/**
			 * 登录后的操作，例如你可以获取某个微博页面的html,然后再对html进行处理并获取html中的一些数据
			 * 获取html方法可以参见根目录下的index.js文件中的getHtml()函数
			 */
		}
	 }).catch((error) => {
		 console.log(error);
	 })
})()
```

## License
MIT