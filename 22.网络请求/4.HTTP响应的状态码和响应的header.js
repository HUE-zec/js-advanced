// HTTP状态码非常多，可以根据不同的情况给客户端返回不同的状态码

/*
  常见状态码  状态描述                  信息说明
    200    |  OK                    |  客户端请求成功
    201    |  Created               |  POST请求成功，创建新资源
    301    |  Moved Permanently     |  请求的URL已经修改，响应中会给出新的URL 
    400    |  Bad Request           |  客户端的错误，服务器无法或者不进行处理
    401    |  Unauthorized          |  未授权的错误，必须携带请求的身份信息
    403    |  Forbidden             |  客户端没有权限访问，被拒绝
    404    |  Not Found             |  服务器找不到请求的资源
    500    |  Internal Server Error |  服务器遇到了不知道如何处理的情况
    503    |  Server Unavailable    |  服务器不可用，可能处于维护或重载状态，暂时无法访问
*/

/*
  响应信息的header中包括了一些服务器给客户端的信息
    Access-Control-Allow-Origin：一个地址，涉及到跨域的问题
    Connection：如keep-alive
    Content-Length
    Content-Type
    Date
    Kepp-Alive：如timeout=5，设置keep-alive的时间
    Vary：（和代理服务器有关系）
*/