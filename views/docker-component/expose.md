#### expose

expose主要就是把服务的端口映射出来给其他服务使用的。

注意：如果服务的镜像本身已经通过EXPOSE暴露端口了，这里就可以省略通过expose再暴露一遍了。

```yaml
services:
  nginx:
    image: tflinux_nginx1.20
    expose:
      - 80
```



#####  ports和expose的区别

简单说就是ports用来把服务端口映射给宿主机，可以访问宿主机IP地址的人都可以访问ports映射出来的端口。

而expose用来把服务端口开放给其他服务，客户端服务可以通过links功能访问服务端服务的端口。