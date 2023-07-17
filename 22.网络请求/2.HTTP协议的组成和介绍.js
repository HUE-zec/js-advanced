/*
  HTTP(HyperText Transfer Protocol) 是一种用于分布式、协作式、超媒体信息的应用层协议
  HTTP是万维网数据通信的基础，设计HTTP最初的目的是为了提供一种发布和接收HTML页面的方法
  通过HTTP或HTTPS协议请求的资源由统一资源标识定位符（uniform resource identifiers）

  HTTPS是一个客户端（用户）和服务端（网站）之前请求和相应的标准
    通过使用网页浏览器、网络爬虫、、或者其它工具，客户端发起一个网络请求到服务器上指定端口（默认为80）
      我们称这个客户端为用户代理程序（user agent）
      相应的服务器上存储着一些资源，比如HTML文件和图像
        我们称这个响应服务器为源服务器（orign server）

  一次HTTP请求主要包括请求（request）和响应（response）
    请求信息：
      请求行：包含请求方法（请求方式、如何和服务器沟通）、URI、协议版本等
      请求头（header）
      请求体
    响应信息：
      响应行：协议版本、状态码、状态码的原因短语等
      响应头（响应首部字段）
      响应体：包含具体返回的数据

  HTTP版本：
    HTTP/0.9
    HTTP/1.0
    HTTP/1.1（目前使用最广泛的版本）
    HTTP/2.0
    HTTP/3.0

  HTTP请求方式：
    GET 请求一个指定资源的表现形式，使用GET请求应该只被用于获取数据
    HEAD  请求一个与GET请求的相同但是没有响应体的响应（比如在准备下载一个文件前，先获取文件的大小，再决定是否进行下载）
    POST 用于将实体提交到指定的资源 
    PUT 用请求有效荷载（payload）替换目标资源的所有当前表示（和post有点区别就是，post提交资源的时候会替代目标资源）
    DELETE  删除指定的资源
    PATCH 对资源部分修改
    CONNECT 建立一个到目标资源的服务器的隧道，通常用在代理服务器，网页开发很少用到
    TRACE 沿着到目标资源的路径执行一个消息环回测试（测试目标资源会不会返回对应的数据）

      在开发中用的最多的是GET、POST请求
*/