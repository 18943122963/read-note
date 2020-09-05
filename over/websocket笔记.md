# 创建实例

```js
let ws = new WebSocket("url");
```

# 属性

`ws.readyState`
|状态码|状态名|意义|
|-|-|-|
0|connecting|正在连接
1|open|连接成功，可以通信
2|closing|连接正在关闭
3|closed|连接已经关闭

# 事件

`连接成功的回调`
ws.onopen=function(){}

`连接关闭的回调`
ws.onclose=function(){}

`收到数据的回调`
ws.onmessage=function(event){}

`报错的回调`
ws.onerror=function(){}

# 函数

`发送数据`
ws.send(data)
