"use strict";
const weiboLogin = require('./lib/weibo_login.js').weiboLogin;
const request = require('request');
const fs = require('fs');
const querystring = require('querystring');
(async() => {
    let logined = new weiboLogin('18813298638', '644179052').init();
    logined.then((result) => {
        if (result == 1) {
            getHtml();
        }
    }).catch((error) => {
        console.log(error);
    })
})()
// 获取登录成功后的html的一个示例
function getHtml() {
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
        url: 'http://weibo.com/aj/v6/mblog/info/big?ajwvr=6&id=3916111844092586&__rnd=1486973483389', // 此url可以自己构造，这里是搜索12306的url
        headers: headers,
        gzip: true
    };
    return new Promise((resovle, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                response.setEncoding('utf-8');
                // 登录成功后响应的body，保存在htmlData目录下的html.html中
                fs.writeFile('./htmlData/html.html', response.body, (error) => {
                    if (error) {
                        reject('写入html文件失败');
                    } else {
                        resovle('写入html文件成功');
                    }
                });
            }
        })
    })

}