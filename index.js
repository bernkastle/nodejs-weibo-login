"use strict";
const weiboLogin = require('./lib/weibo_login.js').weiboLogin;
const request = require('request');
const fs = require('fs');
const querystring = require('querystring');
(async() => {
    await new weiboLogin('18813298638', '644179052').init();
    let result = await getHtml();
    console.log(result);

})()
// 获取登录成功后的html的一个示例
function getHtml(url) {
    // 构造
    // 读取获取到的cookies文件
    let cookies = fs.readFileSync('./cookies.txt');
    let headers = {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0",
        'Accept-Language': 'en-US,en;q=0.5',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Connection': 'Keep-Alive',
        'cookie': cookies.toString()
    };
    let options = {
        method: 'GET',
        url: 'http://weibo.com/aj/v6/mblog/info/big?ajwvr=6&id=3916111844092586&__rnd=1486973483389', // 此url可以自己构造，这里是某个微博评论页面：http://weibo.com/1745602624/D6L8QhaFs?type=repost 的json接口，
        headers: headers,
        gzip: true
    }
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                response.setEncoding('utf-8');
                resolve(response.body);
            } else {
                reject(error);
            }
        })
    })

}