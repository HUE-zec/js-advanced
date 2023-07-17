// 在Network中的Fetch/XHR中可以看到使用js发出的网络请求

/*
  在request对象的header中包含很多有用的信息，客户端会默认传递一些信息

  content-type是这次请求携带的数据的类型（这个比较重要）
    application/x-www-form-urlencoded：表示数据被编码成以&分隔的键值对，同时以=分隔key和value
    application/json：表示是一个json类型
    text/plain：表示的是文本类型
    application/xml：表示的是xml类型（不常用了）
    multipart/form-data：表示是上传文件（很多地方发现了上传的是文件，会自动设置这个格式）

  content-length：文件的大小长度（自动计算）
  keep-alive：
    HTTP协议是基于TCP协议的（其在请求数据的时候，一定会通过TCP协议和服务器建立一条通道），
    但是通常在进行一次请求和响应后会立刻中断
    如果频繁进行通道的建立、断开和销毁，是会带来很大的性能损耗的
    在HTTP/1.0中，如果想要继续保持连接
      浏览器需要在请求头中添加connection:keep-alive;
      服务器需要在响应头中添加connection:keep-alive;
      当客户端再次放请求时，就会使用同一个连接，直到一方中断连接
    在HTTP/1.1中，所有连接默认是connection:keep-alive的
      不同的Web服务器会有不同的保持keep-alive的时间
      Node中默认是5s
  accept-encoding：告知服务器，客户端支持的文件压缩格式 
    比如js有专门的压缩格式比如.gz（gzip编码），
      比如这次客户端请求一个abc.js文件，
        并告知服务器客户端支持gzip编码的文件，
          那么服务器可以直接给客户端返回一个abc.js.gz文件
            前端这边可以再通过webpack做一些配置将这个文件打包
  accept：告知服务器，客户端可以接收的文件类型，因此具体服务器返回什么格式的文件，取决于客户端
  user-agent：客户端相关的信息（服务器一般是用不到这个数据的）
*/